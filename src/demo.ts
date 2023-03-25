import { PetApi } from "../api";
import type { Pet, AddPetRequest } from "../api";

const petApi = new PetApi();

const payload: AddPetRequest = {
  pet: {
    id: 1,
    category: { id: 1, name: "cat" },
    name: "Jazz",
    photoUrls: ["https://example.com"],
    tags: [{ id: 1, name: "nice" }],
    status: "available",
  },
};

/**
 * Add a new pet to the store
 */
petApi.addPet(payload).then((pet: Pet) => {
  console.log(pet);
});

/**
 * Get a pet by id
 */
petApi.getPetById({ petId: 1 }).then((pet: Pet) => {
  console.log({
    id: pet.id,
    photos: pet.photoUrls,
    name: pet.name,
    status: pet.status,
  });
});
