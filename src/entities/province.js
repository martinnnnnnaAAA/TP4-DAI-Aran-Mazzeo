class Province {
    constructor(id, name, full_name, latitude, longitude, display_order) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.display_order = display_order;
    }
}

const provinciasArray = [
    new Province(1, "Buenos Aires", "Buenos Aires", -34.6083, -58.3712, 1),
    new Province(2, "Catamarca", "Catamarca", -28.4696, -65.7852, 2),
    new Province(3, "Chaco", "Chaco", -27.4512, -58.9866, 3),
    new Province(4, "Chubut", "Chubut", -43.3002, -65.1023, 4),
    new Province(5, "Córdoba", "Córdoba", -31.4201, -64.1888, 5),
    new Province(6, "Corrientes", "Corrientes", -27.4676, -58.8341, 6),
    new Province(7, "Entre Ríos", "Entre Ríos", -32.0575, -59.2295, 7),
    new Province(8, "Formosa", "Formosa", -26.1865, -58.1735, 8),
    new Province(9, "Jujuy", "Jujuy", -24.1858, -65.2995, 9),
    new Province(10, "La Pampa", "La Pampa", -36.6141, -64.2833, 10),
    new Province(11, "La Rioja", "La Rioja", -29.4131, -66.8566, 11),
    new Province(12, "Mendoza", "Mendoza", -32.8895, -68.8458, 12),
    new Province(13, "Misiones", "Misiones", -27.4281, -55.9465, 13),
    new Province(14, "Neuquén", "Neuquén", -38.9526, -68.0591, 14),
    new Province(15, "Río Negro", "Río Negro", -41.1335, -71.3103, 15),
    new Province(16, "Salta", "Salta", -24.7829, -65.4122, 16),
    new Province(17, "San Juan", "San Juan", -31.5375, -68.5364, 17),
    new Province(18, "San Luis", "San Luis", -33.3017, -66.3378, 18),
    new Province(19, "Santa Cruz", "Santa Cruz", -50.0247, -68.5247, 19),
    new Province(20, "Santa Fe", "Santa Fe", -31.6107, -60.6973, 20),
    new Province(21, "Santiago del Estero", "Santiago del Estero", -27.7951, -64.2615, 21),
    new Province(22, "Tierra del Fuego, Antártida e Islas del Atlántico Sur", "Tierra del Fuego, Antártida e Islas del Atlántico Sur", -54.8019, -68.3029, 22),
    new Province(23, "Tucumán", "Tucumán", -26.8083, -65.2176, 23)
];

export {Province,provinciasArray};
