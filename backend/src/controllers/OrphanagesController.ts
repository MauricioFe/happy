import { create } from "domain";

import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import Orphanages from '../models/Orphanage';
export default {
    async create(request: Request, response: Response) {
        const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = request.body;
        const orphanagesRepository = getRepository(Orphanages);

        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });
        await orphanagesRepository.save(orphanage);
        //boa prática colocar o status de acordo com a ação
        return response.status(201).json(orphanage);
    }
};