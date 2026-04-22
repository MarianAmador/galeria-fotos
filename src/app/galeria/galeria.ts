import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Foto {
  id: number;
  url: string;
  titulo: string;
  likes: number;
}

@Component({
  selector: 'app-galeria',
  imports: [CommonModule, FormsModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class GaleriaComponent {

  fotos: Foto[] = [
    { id: 1, url: 'https://cdn.pixabay.com/photo/2020/05/29/06/42/cat-5233986_1280.jpg', titulo: 'Gato Negro', likes: 0 },
    { id: 2, url: 'https://cdn.pixabay.com/photo/2016/09/07/23/10/cat-1652880_1280.jpg', titulo: 'Gato Naranja', likes: 0 },
    { id: 3, url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg', titulo: 'Gatito blanco', likes: 0 },
   
    { id: 4, url: 'https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_1280.jpg', titulo: 'Gato atigrado', likes: 0 },
    { id: 5, url: 'https://cdn.pixabay.com/photo/2016/11/18/21/57/animal-1837067_1280.jpg', titulo: 'Gato gris', likes: 0 },
    { id: 6, url: 'https://cdn.pixabay.com/photo/2015/02/25/17/56/cat-649164_1280.jpg', titulo: 'Gato juguetón', likes: 0 },
   
    { id: 7, url: 'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg', titulo: 'Gato estirándose', likes: 0 },
    { id: 8, url: 'https://cdn.pixabay.com/photo/2020/10/04/04/24/cat-5625168_1280.jpg', titulo: 'Gato ojos azules', likes: 0 },
    { id: 9, url: 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg', titulo: 'Gato atigrado', likes: 0 },
 
  ];

  

  nuevaUrl = '';
  nuevoTitulo = '';
  error = '';
  nextId = 7;
mostrarFormulario = false;

  get totalLikes(): number {
  return this.fotos.reduce((suma, foto) => suma + foto.likes, 0);
}

  darLike(foto: Foto) {
    foto.likes++;
  }

  eliminarFoto(id: number) {
    this.fotos = this.fotos.filter(f => f.id !== id);
  }

  agregarFoto() {
    if (!this.nuevaUrl.trim()) {
      this.error = 'La URL es obligatoria.';
      return;
    }
    if (!this.nuevoTitulo.trim()) {
      this.error = 'El título es obligatorio.';
      return;
    }

    try {
      new URL(this.nuevaUrl.trim());
    } catch {
      this.error = 'Ingresa una URL válida. Ejemplo: https://ejemplo.com/foto.jpg';
      return;
    }

    this.fotos.unshift({
      id: this.nextId++,
      url: this.nuevaUrl.trim(),
      titulo: this.nuevoTitulo.trim(),
      likes: 0
    });

    this.nuevaUrl = '';
    this.nuevoTitulo = '';
    this.error = '';
    this.mostrarFormulario = false;
  }
}