# Camp QR Code Scanner

A Progressive Web App (PWA) for employee verification at Safari Camp using QR code scanning with offline capabilities.

## 🚀 Features

- **Real-time QR Code Scanning** using html5-qrcode
- **Offline Functionality** with IndexedDB and Service Workers
- **Admin Panel** for employee and manning list management
- **JWT Authentication** for secure admin access
- **Auto-sync** when connection is restored
- **PWA** installable on mobile devices

## 📋 Technology Stack

- **Frontend**: Nuxt.js 3 with Nuxt UI (Tailwind CSS)
- **Backend**: Nuxt Server Routes
- **Database**: MySQL 8.0+ with Prisma ORM
- **Authentication**: JWT using jose library
- **PWA**: @vite-pwa/nuxt
- **QR Scanning**: html5-qrcode
- **Offline Storage**: IndexedDB

## 🛠️ Setup Instructions

### 1. Prerequisites

- Node.js 18+ and npm
- MySQL 8.0+ (local or cloud)

### 2. Install Dependencies

```bash
npm install
```

### 3. Database Setup

Update the `.env` file with your MySQL connection string:

```bash
DATABASE_URL="mysql://username:password@localhost:3306/camp_scanner"
```

For production, you can use:
- **PlanetScale**: https://planetscale.com/
- **Railway**: https://railway.app/
- **MySQL on Vercel**: https://vercel.com/storage/mysql

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run Database Migrations

```bash
npx prisma migrate dev --name init
```

### 6. Seed Initial Admin User

Create a seed script or manually insert an admin user:

```bash
npx prisma studio
```

Then add an admin user with:
- Username: `admin`
- Password Hash: (use bcrypt to hash your password)
- Role: `admin`

Or use this Node.js script:

```javascript
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  
  await prisma.adminUser.create({
    data: {
      username: 'admin',
      passwordHash,
      role: 'admin',
      isActive: true
    }
  });
  
  console.log('Admin user created!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

### 7. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📱 Pages

### Scanner (`/`)
- QR code scanning interface
- Manual employee ID entry
- Offline scanning capability
- Scan history (last 10 scans)
- Online/offline indicator

### Admin Login (`/admin/login`)
- Secure login for administrators
- JWT token-based authentication

### Admin Dashboard (`/admin`)
- Employee management (coming in Phase 2)
- Manning list management (coming in Phase 2)
- Verification logs viewer (coming in Phase 2)

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout

### Employees
- `GET /api/employees` - List all employees
- `POST /api/employees` - Create new employee
- `GET /api/employees/:id` - Get single employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

### Manning List
- `GET /api/manning-list` - Get manning list
- `POST /api/manning-list/:employeeId` - Add to manning list
- `DELETE /api/manning-list/:employeeId` - Remove from manning list

### Verification
- `POST /api/verify/:employeeId` - Verify employee

### Sync
- `GET /api/sync/download` - Download data for offline use
- `POST /api/sync/upload` - Upload offline logs

## 🔐 Environment Variables

Create a `.env` file with:

```bash
DATABASE_URL="mysql://user:password@localhost:3306/camp_scanner"
JWT_SECRET="your-secret-key-change-in-production"
JWT_REFRESH_SECRET="your-refresh-secret-key-change-in-production"
API_BASE_URL="/api"
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Database Setup for Production

Use one of these cloud MySQL providers:
- **PlanetScale**: Serverless MySQL with generous free tier
- **Railway**: PostgreSQL/MySQL with easy setup
- **Vercel MySQL**: MySQL on Vercel's infrastructure

## 📊 Database Schema

### Tables

1. **employees** - Employee information
2. **manning_list** - Authorized employees list
3. **verification_logs** - Scan/verification history
4. **admin_users** - Admin user accounts

## 🔧 Development Phases

### ✅ Phase 1 (Weeks 1-2)
- [x] Core scanner interface
- [x] Employee database schema
- [x] QR code scanning
- [x] Basic verification
- [x] Offline support (IndexedDB)
- [x] PWA configuration

### 🚧 Phase 2 (Weeks 3-4)
- [ ] Complete admin panel UI
- [ ] Employee CRUD operations
- [ ] Manning list management
- [ ] Bulk import (CSV/Excel)
- [ ] Photo upload

### 📅 Phase 3 (Weeks 5-6)
- [ ] Enhanced PWA features
- [ ] Background sync
- [ ] Push notifications
- [ ] Advanced offline capabilities

### 🎯 Phase 4 (Weeks 7-8)
- [ ] Testing & optimization
- [ ] Performance improvements
- [ ] Security audit
- [ ] Production deployment

## 📝 Notes

- Default admin credentials should be changed immediately in production
- JWT secrets must be changed in production
- For local development, you can use the default MySQL connection
- The PWA works offline after the first data sync

## 🆘 Troubleshooting

### Camera not working
- Check browser permissions
- Ensure HTTPS in production (required for camera access)
- Try switching camera using the toggle button

### Offline mode not syncing
- Check browser's IndexedDB
- Ensure you've synced at least once while online
- Check pending sync count in the scanner interface

### Database connection errors
- Verify DATABASE_URL is correct
- Ensure MySQL is running
- Check firewall settings

## 📚 Resources

- [Nuxt.js Documentation](https://nuxt.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Nuxt UI Components](https://ui.nuxt.com/)
- [html5-qrcode](https://github.com/mebjas/html5-qrcode)

## 📄 License

MIT License - Feel free to use for your safari camp!
