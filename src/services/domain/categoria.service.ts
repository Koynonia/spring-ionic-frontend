import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Observable";
import { CatedoriaDTO } from "../../models/categoria.dto";

@Injectable()
export class CategoriaService {
    constructor(public http: HttpClient) {

    }

    findAll() : Observable<CatedoriaDTO[]> {
        return this.http.get<CatedoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}