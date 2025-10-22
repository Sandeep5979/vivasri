import CityModel from "../../models/CityModel.js";


export const createCity = async (data) => {
  const city = new CityModel(data);
  return await city.save();
};

export const getAllCity = async (page =1, limit=10) => {
  const skip = (page - 1) * limit;
  const total = await CityModel.countDocuments();
  const data = await CityModel.find()
    .sort({ createdAt: -1 }) // descending order by createdAt
    .populate("state_id", "name")
    .populate("country_id", "name")
    .skip(skip)
    .limit(limit)
    .exec();

  return {
            total,
            page,
            limit,
            data,
          };
          
};

export const getCityById = async (id) => {
  return await CityModel.findById(id);
};

export const updateCity = async (id, data) => {
  return await CityModel.findByIdAndUpdate(id, data, { new: true });
};   

export const deleteCity = async (id) => {
  return await CityModel.findByIdAndDelete(id);
};