import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    profile_id: {
      type: String,
      trim: true
    },
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true
    },
    mobile: {
      type: String,
      trim: true
    },
    profile_for: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LookingFor",
      trim: true
    },
    marital_status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MaritalStatus",
      trim: true
    },
    have_children: {
      type: String,
      trim: true
    },
    manglik: {
      type: String,
      trim: true
    },
    height: {
      type: Number,
      trim: true
    },
    weight: {
      type: Number,
      trim: true
    },
    complexion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complexion",
      trim: true
    },
    dob: {
      type: Date,
      trim: true
    },

    birth_state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      trim: true
    },
    birth_city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      trim: true
    },
    gender: {
      type: String,
      trim: true
    },
    hobbies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hobbies",
        trim: true
      }
    ],
    diet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diet",
      trim: true
    },
    about: {
      type: String,
      trim: true
    },
    contact_no: {
      type: Number,
      trim: true
    },
    contact_email: {
      type: String,
      trim: true
    },

    instagram: {
      type: String,
      trim: true
    },
    facebook: {
      type: String,
      trim: true
    },
    reference: {
      type: String,
      trim: true
    },
    aadhaar_no: {
      type: Number,
      trim: true
    },
    religion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Religion",
      trim: true
    },
    caste: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caste",
      trim: true
    },
    sub_caste: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCaste",
      trim: true,
      set: v => (v === "" ? null : v)
    },
    gotra: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gotra",
      trim: true,
      default: null,
      set: v => (v === "" ? null : v)
    },
    gotra_other: {
      type: String,
      trim: true
    },
    
    dosh: {
      type: String,
      trim: true
    },
    loc_nationality: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      trim: true
    },
    loc_residence_type: {
      type: String,
      trim: true
    },
    loc_house_type: {
      type: String,
      trim: true
    },
    loc_state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      trim: true
    },
    loc_city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      trim: true
    },
    loc_pincode: {
      type: String,
      trim: true
    },
    loc_temp_state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      trim: true
    },
    loc_temp_city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      trim: true
    },
    loc_temp_pincode: {
      type: String,
      trim: true
    },
    loc_relation: {
      type: String,
      trim: true
    },
    loc_relation_name: {
      type: String,
      trim: true
    },
    loc_relation_email: {
      type: String,
      trim: true
    },
    loc_relation_mobile: {
      type: String,
      trim: true
    },
    
    family_type: {
      type: String,
      trim: true
    },
    family_value: {
      type: String,
      trim: true
    },
    no_of_sister: {
      type: Number,
      trim: true
    },
    married_sister: {
      type: Number,
      trim: true
    },
    no_of_brother: {
      type: Number,
      trim: true
    },
    married_brother: {
      type: Number,
      trim: true
    },
    no_of_sister_in_law: {
      type: Number,
      trim: true
    },
    married_sister_in_law: {
      type: Number,
      trim: true
    },
    no_of_brother_in_law: {
      type: Number,
      trim: true
    },
    married_brother_in_law: {
      type: Number,
      trim: true
    },
    health_information: {
      type: String,
      trim: true
    },
    disability: {
      type: String,
      trim: true
    },
    add_disability: {
      type: String,
      trim: true
    },
    blood_group: {
      type: String,
      trim: true
    },
    highest_degree: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Education",
      trim: true
    },
    ug_degree: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Education",
      trim: true,
      default: null,
      set: v => (v === "" ? null : v),
    },
    pg_degree: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Education",
      trim: true,
      default: null,
      set: v => (v === "" ? null : v),
    },
    pg_college_name: {
      type: String,
      trim: true
    },
    ug_college_name: {
      type: String,
      trim: true
    },
    college_name: {
      type: String,
      trim: true
    },
    school_name: {
      type: String,
      trim: true
    },
    other_education: {
      type: String,
      trim: true
    },
    annual_income: {
      type: String,
      trim: true
    },
    working_with: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkingWith",
      trim: true
    },
    occupation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Occupation",
      trim: true
    },
    organization_name: {
      type: String,
      trim: true
    },
    prev_working_detail: {
      type: String,
      trim: true
    },
    photo: {
      type: String,
      trim: true
    },
    photo1: {
      type: String,
      trim: true
    },
    photo2: {
      type: String,
      trim: true
    },
    photo3: {
      type: String,
      trim: true
    },
    photo4: {
      type: String,
      trim: true
    },
    photo_blur: {
      type: String,
      trim: true
    },
    photo1_blur: {
      type: String,
      trim: true
    },
    photo2_blur: {
      type: String,
      trim: true
    },
    photo3_blur: {
      type: String,
      trim: true
    },
    photo4_blur: {
      type: String,
      trim: true
    },
    partner_hobbies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hobbies",
        trim: true
      }
    ],
    partner_qualities: {
      type: String,
      trim: true
    },
    partner_age_from: {
      type: Number,
      trim: true
    },
    partner_age_to: {
      type: Number,
      trim: true
    },
    partner_weight_from: {
      type: Number,
      trim: true
    },
    partner_weight_to: {
      type: Number,
      trim: true
    },
    partner_height_from: {
      type: Number,
      trim: true
    },
    partner_height_to: {
      type: Number,
      trim: true
    },
    partner_language: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Language",
      trim: true
    },
    partner_marital_status: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "MaritalStatus",
      trim: true
    }],
    partner_mother_tongue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Language",
      trim: true
    },
    partner_family_type: {
      type: String,
      trim: true
    },
    partner_family_value: {
      type: String,
      trim: true
    },
    partner_country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      trim: true
    },
    partner_state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      trim: true
    },
    partner_city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      trim: true
    },
    partner_education: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Education",
      trim: true
    },
    partner_professional_qualification: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProfessionalEducation",
      trim: true
    },
    partner_occupation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Occupation",
      trim: true
    },
    partner_working_as: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WorkingWith",
      trim: true
    },
    partner_income_from: {
      type: String,
      trim: true
    },
    partner_income_to: {
      type: String,
      trim: true
    },
    partner_religion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Religion",
      trim: true
    },
    partner_caste: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caste",
      trim: true
    },
    partner_sub_caste: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCaste",
      trim: true
    },
    partner_gotra: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Gotra",
      trim: true,
      default: null,
      set: v => (v === "" ? null : v)
    },
    partner_gotra_other: {
      type: String,
      trim: true
    },
    
    partner_dosh: {
      type: String,
      trim: true
    },
    partner_diet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diet",
      trim: true
    },
    partner_drinking: {
      type: String,
      trim: true
    },
    partner_smoking: {
      type: String,
      trim: true
    },
    partner_managed_by: {
      type: String,
      trim: true
    },
    partner_complexion: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complexion",
      trim: true
    },
    partner_have_children: {
      type: String,
      trim: true
    },
    reference_other: {
      type: String,
      trim: true
    },
    
    home_reg_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HomeRegistration",
      default: null,
      set: v => (v === "" ? null : v),
      
    },
    profile_photo: {
      type: Number,
      trim: true
    },

    loc_landmark: {
      type: String,
      trim: true
    },
    loc_temp_landmark: {
      type: String,
      trim: true
    },
    partner_landmark: {
      type: String,
      trim: true
    },
    step: {
      type: Number,
      trim: true
    },

    status: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
