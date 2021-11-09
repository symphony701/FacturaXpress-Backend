import { IsString } from 'class-validator';

export class CreateUserdto {
  @IsString()
  NUsuario: string;
  @IsString()
  NCorreo: string;
  @IsString()
  NContrasenia: string;
}
