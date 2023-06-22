import React from 'react';
import useTitle from '../../Hooks/useTitle';


const Blog = () => {

    useTitle('Blog')
    return (
        <div className='px-5 md:px-36'>
        <div className='p-5 md:p-10 py-10 md:py-16'>
          <div className='grid grid-cols-1 gap-8 drop-shadow-md'>
                <div className='border p-3 md:p-5 rounded-lg bg-gray-100'>
                <h2 className="text-xl text-pink-900 font-bold mb-4">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-base mb-10 font-medium'>Answer: An access token is a credential that is used to authorize and authenticate a user or application to access protected resources, such as APIs or web services. It is usually a short-lived token that is issued by an authorization server after successful authentication. The access token is included in API requests to prove the user or application's identity and permissions.<br />

                    A refresh token is a long-lived token that is also issued by the authorization server alongside the access token. Its purpose is to obtain a new access token when the current one expires without requiring the user or application to re-authenticate. When the access token expires, the refresh token can be used to request a new access token from the authorization server, extending the session without requiring the user to provide their credentials again.
                    .</p>
                    </div>
                    <div className='border p-3 md:p-5 rounded-lg bg-gray-100'> 
                <h2 className="text-xl text-pink-900 font-bold mb-4">2.Compare SQL and NoSQL databases?</h2>
                <p className='text-base mb-10 font-medium'>Answer: SQL: SQL databases use a structured and predefined schema to organize data into tables with rows and columns. They enforce relationships and constraints between tables.<br/>
                    NoSQL: NoSQL databases use various data models, such as key-value, document, columnar, or graph. They offer more flexible and dynamic schema, allowing for unstructured or semi-structured data.</p>
                    </div>
                    <div className='border p-3 md:p-5 rounded-lg bg-gray-100'>
                <h2 className="text-xl text-pink-900 font-bold mb-4">3. What is express js? What is Nest JS?</h2>
                <p className='text-base mb-10 font-medium'>
                Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and lightweight foundation for building web applications and APIs. Express.js allows developers to handle HTTP requests and responses, define routes, and implement middleware for processing requests. It is known for its simplicity, speed, and extensive ecosystem of middleware and extensions. Express.js is widely used in the Node.js community and is suitable for a variety of web development projects.</p>
                </div>
                <div className='border p-3 md:p-5 rounded-lg bg-gray-100'>
                <h2 className="text-xl text-pink-900 font-bold mb-4">4. What is MongoDB aggregate and how does it work?</h2>
                <p className='text-base mb-10 font-medium'>Answer: In MongoDB, the aggregate function is used to perform advanced data processing and analysis operations on collections. It allows us to perform complex calculations, transformations, and aggregations on our data.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;