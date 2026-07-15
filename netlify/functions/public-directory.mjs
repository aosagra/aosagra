import { handleError, jsonResponse, readMemberDirectory, statusError } from "./_member-shared.mjs";

function isAgraPractice(member) {
  return String(member.city ?? "").trim().toLowerCase() === "agra";
}

function publicMember(member) {
  return {
    id: member.id,
    name: member.name,
    city: member.city,
    hospital: member.hospital,
    qualification: member.qualification,
    appointment: member.appointment,
    interest: member.interest
  };
}

export async function handler(event) {
  try {
    if (event.httpMethod !== "GET") {
      throw statusError(405, "Use GET to read the public directory.");
    }

    const directory = readMemberDirectory();
    const members = directory.members.filter(isAgraPractice).map(publicMember);

    return jsonResponse(200, {
      ok: true,
      configured: directory.configured,
      updatedAt: directory.updatedAt,
      count: members.length,
      members
    });
  } catch (error) {
    return handleError(error);
  }
}
