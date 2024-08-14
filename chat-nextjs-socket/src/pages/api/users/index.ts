// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { retriveData, retriveDataByQuery } from "../../../lib/db/firebase/service";
import { AuthPayload, AuthResponse, ResponseAPI } from "./domain";
import { isArray } from "util";

export default async function handleAuthData(
    req: NextApiRequest,
    res: NextApiResponse<ResponseAPI>,
) {

    const response = {} as ResponseAPI;

    try {

        if (req.method !== 'POST') {
            response.message = 'Method not allowed';
            response.statusCode = 405;
            response.data = {} as any;
            res.status(405).json(response);
            return;
        }

        const body: AuthPayload = req.body;

        const data = await retriveDataByQuery('users', 'username', body.userName);

        if ((isArray(data) && data.length === 0) || !isArray(data)) {
            response.message = 'user not found';
            response.statusCode = 404;
            response.data = {} as any;
            res.status(404).json(response);
            return;
        }

        if (isArray(data)) {

            const userData = data[0] as AuthResponse;

            if (userData.password !== body.password) {
                response.message = 'password not match';
                response.statusCode = 404;
                response.data = {} as any;
                res.status(404).json(response);
                return;

            }

            response.message = 'user found';
            response.statusCode = 200;
            response.data = data[0] as any;
            res.status(200).json(response);
            return;

        } else {


            response.message = 'Unexpected data type';
            response.statusCode = 400;
            response.data = {} as any;
            res.status(200).json(response);

        }

    } catch (error) {

        response.message = error!.toString();
        response.statusCode = 404;
        response.data = {} as any;
        res.status(500).json(response);
        return

    }
}

