type Affiliation = {
  value: string;
  label: string;
};

export type CollegeType = {
  _id: string;
  uniqueId: number;
  userId: number;
  property_type: string;
  property_name: string;
  short_name: string;
  phone_number: string;
  alt_phone_number: string;
  email: string;
  affiliated_by: Affiliation[];
  college_or_university_type: Affiliation[];
  established_year: string;
  logo: string;
  logo_compressed: string;
  featured_image: string;
  featured_image_compressed: string;
  status: string;
  createdAt: string; // ISO timestamp string
  __v: number;
};

// If the API returns an array:
export type PropertyApiResponse = CollegeType[];

export type CollegeContextType = {
  colleges: CollegeType[];
  isLoading: boolean;
  refectColleges: () => void;
};
