import { xml } from 'remix-utils/responses';
import { Sitemap } from "~/modules/sitemap.server";
import type { Route } from "./+types/sitemap[.]xml";


export async function loader({ request }: Route.LoaderArgs) {

    // @ts-ignore
    // const build = await import('virtual:react-router/server-build');
    const publicRoutes = ['/', '/home']

    const url = new URL(request.url);
    const host = url.host;

    const sitemap = new Sitemap();

    for (const route of publicRoutes) {
        sitemap.append(new URL(route, `https://${host}`));
    }

    return xml(sitemap.toString());
}