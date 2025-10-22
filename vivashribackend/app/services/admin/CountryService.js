import CountryModel from "../../models/CountryModel.js";




export const createCountry = async (data) => {
  const country = new CountryModel(data);
  return await country.save();
};

export const getAllCountry = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const data = await CountryModel.find()
                .sort({ createdAt: -1 }) // descending order
                .skip(skip)
                .limit(limit);

  const total = await CountryModel.countDocuments();
          return {
            data,
            totalItems: total,  
            totalPages: Math.ceil(total / limit),
            currentPage: page,
          };  

};

export const getCountryById = async (id) => {
  return await CountryModel.findById(id);
};

export const updateCountry = async (id, data) => {
  return await CountryModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteCountry = async (id) => {
  return await CountryModel.findByIdAndDelete(id);
};