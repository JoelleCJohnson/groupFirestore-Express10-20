import express from 'express';
import cors from 'cors';
import { getAllPets, addPet } from './src/pets.js';
import { onRequest } from 'firebase-functions/v2/https';

const app = express()

app.use(express.json())
app.use(cors())

app.get("/pets", getAllPets)
app.post("/pets", addPet)

export const api = onRequest(app)