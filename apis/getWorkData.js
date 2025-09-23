import { ApiUrl } from "@/utils/constants";

// Fetch home page services/ my work
async function fetchWorksDetail() {
    const response = await fetch(ApiUrl, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `
        {
                worksCollection(order: id_ASC) {
                items{                          
                        id
                        title
                        description
                        slug
                        image{
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
        workDetails: json.data.worksCollection.items,
    };
}

export { fetchWorksDetail };


