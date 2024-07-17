import React from "react";
import { Send, Facebook, Twitter, Linkedin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function Contact() {
  const position = [27.19651220464952, 77.94361793134519];
  const zoom = 15;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded-md"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
            <textarea
              required
              placeholder="Message"
              rows={6}
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md flex items-center justify-center"
            >
              <Send className="mr-2" size={18} />
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <span className="font-semibold">Email: </span>info@agriastha.com
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone: </span>(+91) 8126510445
          </p>
          <div className="flex space-x-4">
            <Facebook size={24} />
            <Twitter size={24} />
            <Linkedin size={24} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4">Our Location</h2>
        <div className="h-64 w-full rounded-md overflow-hidden">
          <MapContainer
            center={position}
            zoom={zoom}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Our Office Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
