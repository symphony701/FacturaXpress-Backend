import { IsNumber, IsString } from 'class-validator';

export class CreateCarteraDto {
  @IsNumber()
  CUsuario: number;
  @IsString()
  NTipoTasa: string;
  @IsNumber()
  NumPorcentajeTasa: number;
  @IsString()
  NPlazoTasa: string;
  @IsNumber()
  NumPlazoTasa: number;
  @IsNumber()
  NumDiasXAnio: number;
  @IsNumber()
  NumPlazoDescuento: number;
  @IsString()
  NPerioCapital: string;
  @IsNumber()
  NumPerioCapital: number;
}
