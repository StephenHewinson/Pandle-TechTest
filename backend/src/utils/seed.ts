import 'reflect-metadata';
import { TYPES } from "../types.js";
import { container } from "../container.js";
import { PrismaClient } from "@prisma/client";
import { DateTime } from "luxon";

const client = container.get<PrismaClient>(TYPES.Prisma);

async function main() {
  const job = await client.job.findFirst();
  if (job != null) return;
  
  await client.job.create({
    data: {
      title: 'Software Engineer',
      company: 'The Accountancy Partnership',
      location: 'Remote',
      description: "If you’re a productive developer, passionate about tech, want to be challenged, want to have an impact, whilst having fun and be well rewarded in return, then we could be a good fit for you",
      candidates: {
        createMany: {
          data: [{
            name: 'Stephen Hewinson',
            email: 'steehew@gmail.com',
            phoneNumber: '07123456789',
            applicationDate: DateTime.utc().minus({ days: 7}).toJSDate()
          },
          {
            name: 'Joe Blogs',
            email: 'joe.blogs@gmail.com',
            phoneNumber: '07999999999',
            applicationDate: DateTime.utc().minus({ days: 3}).toJSDate()
          }, 
          {
            name: 'Fred Flintstone',
            email: 'fflinstone@bedrock.co.uk',
            phoneNumber: '07888888888',
            applicationDate: DateTime.utc().minus({ days: 5}).toJSDate()
          }]
        }
      }
    }
  });

  await client.job.create({
    data: {
      title: 'Senior Application Developer',
      company: 'The Fake Company',
      location: 'London, UK',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      candidates: {
        createMany: {
          data: [{
            name: 'Stephen Hewinson',
            email: 'steehew@gmail.com',
            phoneNumber: '07123456789',
            applicationDate: DateTime.utc().minus({ days: 7}).toJSDate()
          },
          {
            name: 'Bruce Wayne',
            email: 'Bruce.Wayne@gothom.com',
            phoneNumber: '07777777777',
            applicationDate: DateTime.utc().minus({ days: 7}).toJSDate()
          }, 
          {
            name: 'Clark Kent',
            email: 'ckent@gmail.com',
            phoneNumber: '07666666666',
            applicationDate: DateTime.utc().minus({ days: 2}).toJSDate()
          },
          {
            name: 'John Doe',
            email: 'john.doe90@gmail.com',
            phoneNumber: '07666666666',
            applicationDate: DateTime.utc().minus({ days: 2}).toJSDate()
          }]
        }
      }
    }
  })
}

main().then(async () => {
  await client.$disconnect()
}).catch(async (e) => {
  console.error(e);
  await client.$disconnect();
  process.exit(1);
})