export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
};

export type Candidate = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  applicationDate: string;
}

export type JobWithCandidates = Job & { 
  candidates: Array<Candidate>
};