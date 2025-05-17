// JSON imports with assertions (required for "module": "NodeNext")
import users from '../data/user.json' with { type: 'json' };
import blogs from '../data/blog.json' with { type: 'json' };
import products from '../data/products.json' with { type: 'json' };
// Cast to proper types
const userData = users;
const blogData = blogs;
const productData = products;
const resolvers = {
    Query: {
        users: () => userData,
        blogs: () => blogData,
        products: () => productData,
    },
    User: {
        blogs: (parent) => blogData.filter(blog => blog.authorId === parent.id),
    },
    Blog: {
        author: (parent) => userData.find(user => user.id === parent.authorId),
    },
};
export default resolvers;
