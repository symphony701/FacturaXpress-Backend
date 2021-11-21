import { IsNumber, IsString } from 'class-validator';

export class CreateCostosFinalesDto {
  @IsNumber()
  CCartera: number;
  @IsString()
  NMotivo: string;
  @IsNumber()
  NumMonto: number;
  @IsString()
  NMoneda: string;
}
