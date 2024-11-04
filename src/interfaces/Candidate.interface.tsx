// TODO: Create an interface for the Candidate objects returned by the API
// name, username, location, avatar, email, html_url, and company
export default interface Candidate {
    readonly name: string | null;
    readonly username: string;
    readonly location: string | null;
    readonly bio: string | null;
    readonly avatar_url: string | null;
    readonly email: string | null;
    readonly html_url: string | null;
    readonly company: string | null;
  }
  