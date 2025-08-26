from dataclasses import dataclass
import re


@dataclass
class Submission:
    nombre: str = ""
    apellido: str = ""
    sector: str = ""
    institucion: str | None = None
    telefono: str | None = None
    mail: str | None = None
    disponible: bool | None = None
    comentario: str | None = None

    @classmethod
    def from_dict(cls, data: dict) -> 'Submission':
        return cls(
            nombre=data.get('nombre', '').strip(),
            apellido=data.get('apellido', '').strip(),
            sector=data.get('sector', '').strip(),
            institucion=data.get('institucion'),
            telefono=data.get('telefono'),
            mail=data.get('mail'),
            disponible=data.get('disponible'),
            comentario=data.get('comentario'),
        )

    def validate(self) -> list[str]:
        errors = []
        if not self.nombre:
            errors.append('nombre requerido')
        if not self.apellido:
            errors.append('apellido requerido')
        if not self.sector:
            errors.append('sector requerido')
        if self.mail and not re.match(r"[^@]+@[^@]+\.[^@]+", self.mail):
            errors.append('mail invalido')
        return errors
