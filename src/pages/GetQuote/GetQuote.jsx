import { Link } from "react-router-dom";


const GetQuote = () => {
    return (
        <div className="w-full bg-gray-200 px-16 py-4 my-4 rounded-lg">
            <h2 className="text-xl font-semibold py-4">Get a Quote</h2>
            <p>Thank you for considering BlackDot Event Management for your upcoming corporate event. We are pleased to present you with a customized quotation based on your requirements. Our team is committed to delivering a seamless and unforgettable event experience for you and your guests.</p>
            <p className="my-4">Please send details to our mail: <Link className="underline text-violet-700">info@blackdot.com</Link>. We will contact with you.</p>

            <p className="my-4">Based on the services selected and the event details provided, the total cost for our event management services is xxxxx.</p>
            <h2 className="text-xl font-semibold py-2">Payment Terms:</h2>
            <p className="font-semibold">50% deposit due upon acceptance of the quotation</p>
            <p className="font-semibold">Remaining 50% due one week prior to the event date</p>
        </div>
    );
};

export default GetQuote;