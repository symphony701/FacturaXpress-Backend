import { IsNumber, IsString } from 'class-validator';

export class CreateFacturaDto {
  @IsString()
  DFechaEmision: string;
  @IsString()
  DFechaPago: string;
  @IsNumber()
  NumMonto: number;
  @IsString()
  NMoneda: string;
  @IsNumber()
  CCartera: number;
  @IsNumber()
  NumTEA: number;
  @IsNumber()
  NumTED: number;
  @IsNumber()
  NumD360: number;
  @IsNumber()
  NumDescuento: number;
  @IsNumber()
  NumVNeto: number;
  @IsNumber()
  NumVRecibido: number;
  @IsNumber()
  NumVEntregado: number;
  @IsNumber()
  NumTCEA: number;
  @IsNumber()
  NumPlazoDescuento: number;
}
