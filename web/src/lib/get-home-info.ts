import { query } from "./strapi";

export async function getHomeInfo() {
    return query("home")
    .then (res => {
        return res.data
    })
}