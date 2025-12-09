import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: 'availabilityStatus',
      title: 'Available for Work',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'upworkStats',
      title: 'Upwork Statistics',
      type: 'object',
      fields: [
        {
          name: 'jobSuccess',
          title: 'Job Success Score',
          type: 'number',
          validation: (Rule) => Rule.min(0).max(100),
        },
        {
          name: 'totalJobs',
          title: 'Total Jobs',
          type: 'number',
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'totalEarnings',
          title: 'Total Earnings',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
  ],
})
