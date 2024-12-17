import Developer from './models/developer.model';
import Area from './models/area.model';
import Project from './models/project.model';
import Apartment from './models/apartment.model';
import connectDB from './connection';

const seedData = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Check if developers already exist
    const developerCount = await Developer.countDocuments();
    if (developerCount === 0) {
      console.log('Seeding developers...');
      const developers = [
        {
          name: 'XYZ Developers',
          contact_info: '+1 234-567-890',
          address: '123 Developer Lane, City A',
          website: 'www.xyzdevelopers.com',
        },
        {
          name: 'ABC Constructions',
          contact_info: '+1 987-654-321',
          address: '456 Build Ave, City B',
          website: 'www.abcconstructions.com',
        },
        {
          name: 'Skyline Builders',
          contact_info: '+1 555-123-456',
          address: '789 Skyline St, City C',
          website: 'www.skylinebuilders.com',
        },
      ];
      await Developer.insertMany(developers);
    }

    // Check if areas already exist
    const areaCount = await Area.countDocuments();
    if (areaCount === 0) {
      console.log('Seeding areas...');
      const areas = [
        {
          name: 'Downtown',
          description: 'Central business district, with shops and offices.',
          latitude: 40.7128,
          longitude: -74.006,
        },
        {
          name: 'Uptown',
          description: 'Residential area with parks and schools.',
          latitude: 40.7306,
          longitude: -73.9352,
        },
        {
          name: 'Riverside',
          description: 'Area along the river, with waterfront views.',
          latitude: 40.758,
          longitude: -73.9855,
        },
      ];
      await Area.insertMany(areas);
    }

    // Check if projects already exist
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('Seeding projects...');
      const developers = await Developer.find();
      const areas = await Area.find();

      const projects = [
        {
          name: 'Skyline Towers',
          developer: developers[0]._id,
          area: areas[0]._id,
          start_date: new Date('2022-01-01'),
          status: 'In Progress',
        },
        {
          name: 'Green Heights',
          developer: developers[1]._id,
          area: areas[1]._id,
          start_date: new Date('2023-03-15'),
          status: 'In Progress',
        },
        {
          name: 'Riverfront Condos',
          developer: developers[2]._id,
          area: areas[2]._id,
          start_date: new Date('2023-05-20'),
          status: 'Under Construction',
        },
      ];
      await Project.insertMany(projects);
    }

    // Check if apartments already exist
    const apartmentCount = await Apartment.countDocuments();
    if (apartmentCount === 0) {
      console.log('Seeding apartments...');
      const projects = await Project.find();

      const apartments = [
        {
          name: '2BHK Flat',
          price: 2500,
          size: 1200,
          rooms: 2,
          developer: projects[0].developer,
          area: projects[0].area,
          project: projects[0]._id,
          status: 'Available',
          recommendations: 44,
        },
        {
          name: 'Penthouse',
          price: 5500,
          size: 2500,
          rooms: 5,
          developer: projects[0].developer,
          area: projects[0].area,
          project: projects[0]._id,
          status: 'Sold',
          recommendations: 50,
        },
        {
          name: '1BHK Flat',
          price: 1800,
          size: 800,
          rooms: 1,
          developer: projects[1].developer,
          area: projects[1].area,
          project: projects[1]._id,
          status: 'Available',
          recommendations: 90,
        },
      ];
      await Apartment.insertMany(apartments);
    }

    console.log('Seeding completed!');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
};

// Run the seed data function
seedData();
