import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "<h1>FullCycle4 - Desafio3</h1><p><p>" +
            "<b>Recursos:</b><p><p>" + 
            "-GET  /categories -> Consulta de categorias<p>" +
            "-POST /categories -> Criação de categorias<p>" +
            "-GET  /api        -> documentação<p>";
  }
}
