# Somali Abtirsi API

A RESTful API for Somali tribal genealogy and information. This API provides comprehensive data about Somali tribes, their sub-clans, and regions.

## 🚀 Live Deployment

The API is deployed on Railway and can be accessed at:
- Main URL: https://abtirsi-production.up.railway.app
- Custom Domain: https://abtirsi.garaad.org

## 📚 API Documentation

### Base URL
```
https://abtirsi-production.up.railway.app
```

### Endpoints

#### 1. Get All Tribes
```http
GET /api/abtirsi
```

#### 2. Get Specific Tribe
```http
GET /api/abtirsi/:qabiil
```
Example: `/api/abtirsi/Dir`

#### 3. Get Sub-clans of a Tribe
```http
GET /api/abtirsi/:qabiil/laamood
```
Example: `/api/abtirsi/Dir/laamood`

#### 4. Get Regions of a Tribe
```http
GET /api/abtirsi/:qabiil/gobollada
```
Example: `/api/abtirsi/Dir/gobollada`

### Available Tribes
- Daarood
- Hawiye
- Dir
- Isaaq
- Raxanweyn
- Benadiri
- Jareerweyne
- Gabooye
- Ashraaf

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/somali-tribes-api.git

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
Create a `.env` file in the root directory:
```
PORT=3000
```

## 🔧 Built With
- Express.js - Web framework
- CORS - Cross-origin resource sharing
- Railway - Deployment platform

## 📝 License
This project is licensed under the ISC License.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact
For any questions or suggestions, please open an issue in the repository. 