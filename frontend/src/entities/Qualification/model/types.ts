export type Qualifications = {
  id: string;
  name: string;
};

export type Qualification = {
  id: string;
  qualifications: Qualifications[];
  name: string;
};