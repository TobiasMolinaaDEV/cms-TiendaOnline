import { query } from "./strapi";

const { STRAPI_HOST } = process.env

export async function getHomeInfo() {
    return query("home?populate=cover")
    .then (res => {
        const { title, description, cover } = res.data;

        // Verifica que cover y cover.url existan
        if (cover && cover.url) {
            // Construye la URL completa de la imagen
            const image = `${STRAPI_HOST}${cover.url}`;
            return { title, description, image };
        } else {
            throw new Error('Cover image not found');
        }
    })
    .catch(error => {
        console.error('Error fetching home info:', error);
        return { title: '', description: '', image: '' };
    });
}
