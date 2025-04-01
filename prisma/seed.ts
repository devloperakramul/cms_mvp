import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // Create initial company with hashed password
    const hashedPassword = bcrypt.hashSync('password', 10);
    await prisma.company.create({
        data: {
            name: 'Example School',
            email: 'admin@example.com',
            password: hashedPassword,
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            zipCode: '12345',
            phone: '555-1234'
        }
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

async function main() {
    // Sample pages data
    const pages = [
        {
            title: 'About Us',
            slug: 'about',
            description: 'Learn more about our school',
            content: 'Our school was founded in 1990 with a mission to provide quality education...'
        },
        {
            title: 'Academics',
            slug: 'academics',
            description: 'Our academic programs',
            content: 'We offer a comprehensive curriculum from kindergarten through high school...'
        },
        {
            title: 'Admissions',
            slug: 'admissions',
            description: 'How to join our school',
            content: 'Admissions are open for the 2024-2025 academic year. The application process...'
        },
        {
            title: 'Contact Us',
            slug: 'contact',
            description: 'Get in touch with us',
            content: 'Our office is open Monday to Friday from 8am to 4pm. Phone: +123456789...'
        },
        {
            title: 'Latest News',
            slug: 'news',
            description: 'School news and announcements',
            content: 'Check here for the latest updates about school events and important notices...'
        },
        {
            title: 'School Life',
            slug: 'school-life',
            description: 'Student activities and events',
            content: 'Our school offers a vibrant extracurricular program including sports, arts...'
        },
        {
            title: 'Our Staff',
            slug: 'staff',
            description: 'Meet our faculty and staff',
            content: 'Our dedicated team of educators brings years of experience and passion...'
        }
    ];

    // Create sample pages
    for (const page of pages) {
        await prisma.page.upsert({
            where: { slug: page.slug },
            update: {},
            create: page
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });