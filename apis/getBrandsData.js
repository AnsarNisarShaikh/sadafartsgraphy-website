import { ApiUrl } from "@/utils/constants";

// Fetch home page services/ my work
async function fetchBrandsDetail() {
    const response = await fetch(ApiUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
        {
                brandsCollection(order: id_ASC) {
                items{
                        id
                        title
                        image{
                            url
                            title
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
        brandsDetails: json.data.brandsCollection.items,
    };
}

export { fetchBrandsDetail };


