# Product Tracking App

Bu proje, ürün ve kategori takibi için React (frontend) ve ASP.NET Core (backend) kullanır.

## Kurulum

### 1. Backend (ASP.NET Core)

#### Gereksinimler
- .NET 6 veya üzeri
- SQL Server (veya SQLite, yapılandırmaya göre)

#### Kurulum Adımları
1. MSSQL'de yeni bir veritabanı oluşturun:
   - SQL Server Management Studio (SSMS) veya Azure Data Studio ile bağlanın.
   - Yeni bir veritabanı oluşturmak için aşağıdaki sorguyu çalıştırın:
     ```sql
     CREATE DATABASE ProductsDb;
     ```
2. `Products` klasörüne gidin:
   ```sh
   cd Products
   ```
3. `appsettings.json` ve `appsettings.Development.json` dosyalarında bağlantı ayarlarını güncelleyin:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost;Database=ProductsDb;User Id=KULLANICI_ADI;Password=ŞİFRE;TrustServerCertificate=True;"
   }
   ```
   - `KULLANICI_ADI` ve `ŞİFRE` alanlarını kendi SQL kullanıcı bilgilerinizle değiştirin.
4. NuGet paketlerini yükleyin:"
   ```sh
   dotnet restore
   ```
5. Veritabanı migrasyonlarını uygulayın:
   ```sh
   dotnet ef database update
   ```
6. Backend'i başlatın:
   ```sh
   dotnet run
   ```
   API varsayılan olarak `http://localhost:5145` adresinde çalışır.

### 2. Frontend (React)

#### Gereksinimler
- Node.js (v16+ önerilir)
- npm veya yarn

#### Kurulum Adımları
1. `product-tracking-app` klasörüne gidin:
   ```sh
   cd product-tracking-app
   ```
2. Bağımlılıkları yükleyin:
   ```sh
   npm install
   ```
3. Frontend'i başlatın:
   ```sh
   npm start
   ```
   Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

### 3. Ortam Değişkenleri
- Frontend'de API adresi `src/api.ts` dosyasında `BASE_URL` ile tanımlıdır. Backend adresiniz farklıysa burayı güncelleyin.

## Kullanım
- Ürün ve kategori ekleyebilir, düzenleyebilir, silebilirsiniz.
- Frontend ve backend ayrı portlarda çalışır, CORS ayarları backend'de açık olmalı.

## Katkı
Pull request ve issue açabilirsiniz.

---

**Not:** Proje klasör yapısı:
- `Products/` → Backend (ASP.NET Core)
- `product-tracking-app/` → Frontend (React)


