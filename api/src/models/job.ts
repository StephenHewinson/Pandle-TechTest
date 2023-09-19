export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
};

export type Candidates = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  applicationDate: Date;
}

export type JobWithCandidates = Job & { 
  candidates: Array<Candidates>
};