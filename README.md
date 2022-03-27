# SpaceX-Ships

A NextJS App which displays the SpaceX fleet ships in SpaceX from SpaceX API.

![Screenshot](https://res.cloudinary.com/drnu1myuq/image/upload/v1648404905/SpaceX_Fleet_Ships_Mozilla_Firefox_27-03-2022_23_39_12_ncolf2.png)

## Demo

View the site from the given [link](https://spacex-ships-one.vercel.app/)

## Features

* View all the ships
* View single ship and its details
* Static-site generation
* Deployed on Vercel

## Run Locally


**Step 1: Clone the project**

```bash
git clone https://github.com/ankitk26/SpaceX-Ships.git
```

**Step 2: Go to the project directory**

```bash
cd my-project
```

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Start the server** 

```bash
npm run dev
```

## API Reference

#### Get all the ships

```http
GET https://api.spacexdata.com/v4/ships
```

#### Get a single ship

```http
GET https://api.spacexdata.com/v4/ships/${ship_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ship_id`*      | `string` | ID of the ship |
