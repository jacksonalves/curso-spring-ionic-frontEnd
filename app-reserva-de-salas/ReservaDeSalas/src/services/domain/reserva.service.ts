import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { ReservaDTO } from "../../models/reserva.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ReservaService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable <ReservaDTO[]>{
        return this.http.get<ReservaDTO[]>(`${API_CONFIG.baseUrl}/reservadesala`);
    }


}