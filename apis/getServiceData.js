import { ApiUrl } from "@/utils/constants";

// Fetch All Services detail with  gallery
async function fetchServicesDetail(slug) {
    const response = await fetch(ApiUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
        {
                servicesCollection(where: { slug: "${slug}" }) {
                items{
                        id
                        title
                        slug
                        desc{
                            json
                        }
                        galleryCollection{
                            items{
                                title
                                fileName
                                url
                            }
                        }
                        banner{
                            title
                            url
                            fileName
                        }
                    }
                }
        }
        `,
        }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();

    return {
        serviceDetails: json.data.servicesCollection.items,
    };
}

export { fetchServicesDetail };



