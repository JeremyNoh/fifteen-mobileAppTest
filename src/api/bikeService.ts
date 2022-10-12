import apiService from './apiService';
import urlApi from './endpoint';

async function getAllBikes() {
  return await apiService.get(urlApi('allBikes'));
}
async function getInfoBikebyId(id: string) {
  return await apiService.get(urlApi('oneBike', id));
}
async function updateBikeById(id: string, infoChange: any) {
  return await apiService.put(urlApi('oneBike', id), infoChange);
}
async function deleteBikebyId(id: string) {
  return await apiService.delete(urlApi('oneBike', id));
}
async function postNewBike(info: any) {
  return await apiService.post(urlApi('allBikes'), info);
}

const bikeService = {
  getAllBikes,
  getInfoBikebyId,
  updateBikeById,
  deleteBikebyId,
  postNewBike,
};
export default bikeService;
