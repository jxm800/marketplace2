const { v4: uuidv4 } = require('uuid');

let postings = 
[
    {
        id: uuidv4(),
        title: "Black t-shirt",
        description: "Selling a black t-shirt, size M. In good condition.",
        category: "clothing",
        location: 
        {
            country: "FI",
            city: "Oulu"
        },
        images: 
        {
            image0: "theshirt1.png",
            image1: "theshirt2.png"
        },
        askingPrice: "10",
        dateOfPosting: "20200405",
        deliveryType: "shipping",
        sellerInformation: 
        {
            name:  "Mikko Laitinen",
            email: "mikko.laitinen@gmail.fi"
        }
    }
]

module.exports = 
{
    insertItem: (title, description, category, location, images, price, postingDate, deliveryType, sellerInfo, userId) =>
    {
        postings.push
        (
            {
                id: uuidv4(),
                title,
                description,
                category,
                location,
                images,
                askingPrice: price,
                dateOfPosting: postingDate,
                deliveryType,
                sellerInformation: sellerInfo,
                userId
            }
        );
    },

    getAllPostings: () => postings,
    getPosting: (postingId) => postings.find(t => t.id == postingId),
    getByCategory: (category) => postings.filter(t => t.category == category),
    getByLocation: (location) => postings.filter(t => t.location == location),
    getByDate: (dateOfPosting) => postings.filter(t => t.dateOfPosting == dateOfPosting),

    deletePosting: (result) => postings.splice(result, 1)
}