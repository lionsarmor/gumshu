<script setup>
import { ref } from 'vue'

const resources = ref([
  {
    title: 'NamUs',
    description: 'National Missing and Unidentified Persons System',
    link: 'https://www.namus.gov/',
    icon: '/path/to/icon1.svg'
  },
  {
    title: 'Doe Network',
    description: 'Assists in solving cold cases of unidentified persons',
    link: 'http://www.doenetwork.org/',
    icon: '/path/to/icon2.svg'
  },
  {
    title: 'Charlie Project',
    description: 'Profiles over 13,000 cold case missing persons',
    link: 'http://www.charleyproject.org/',
    icon: '/path/to/icon3.svg'
  },
  {
    title: 'Unclaimed Persons',
    description: 'Helps find families of unclaimed persons',
    link: 'https://www.unclaimedpersons.org/',
    icon: '/path/to/icon4.svg'
  },
  {
    title: 'FBI Crime Data Explorer',
    description: 'Access to U.S. crime data',
    link: 'https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/docHome',
    icon: '/path/to/icon5.svg'
  },
  {
    title: 'VINELink',
    description: 'Nationwide inmate and offender search',
    link: 'https://www.vinelink.com/',
    icon: '/path/to/icon6.svg'
  },
  {
    title: 'PACER',
    description: 'Federal court records online access',
    link: 'https://pacer.uscourts.gov/',
    icon: '/path/to/icon7.svg'
  },
  {
    title: 'OpenCorporates',
    description: 'Global company data',
    link: 'https://opencorporates.com/',
    icon: '/path/to/icon8.svg'
  },
  {
    title: 'FOIA.gov',
    description: 'Submit FOIA requests to any federal agency',
    link: 'https://www.foia.gov/',
    icon: '/path/to/icon9.svg'
  },
  {
    title: 'USASpending.gov',
    description: 'Federal spending data',
    link: 'https://www.usaspending.gov/',
    icon: '/path/to/icon10.svg'
  }
])

const openLink = (link) => {
  window.open(link, '_blank')
}
</script>
<template>
  <div class="flex justify-center p-8">
    <div class="grid gap-6">
      <div
        v-for="resource in resources"
        :key="resource.title"
        @click="openLink(resource.link)"
        class="resource-briefcase p-6 bg-white shadow-md rounded-lg transition transform hover:scale-105 hover:shadow-xl hover:glow cursor-pointer flex flex-col justify-between"
      >
        <img :src="resource.icon" alt="Resource Icon" class="w-10 h-10 mb-4 mx-3" />
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">{{ resource.title }}</h2>
          <p class="text-gray-600">{{ resource.description }}</p>
        </div>
        <div class="briefcase-handle"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Briefcase Styling */
.resource-briefcase {
  position: relative;
  background-color: #ebdaa5;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
}

.resource-briefcase:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  background-color: #ddc77e;
}

.resource-briefcase:hover::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 10px;
  background-color: #7f1d1d;
  border-radius: 5px 5px 0 0;
}

.briefcase-handle {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 10px;
  background-color: #a0905c;
  border-radius: 5px 5px 0 0;
}

.resource-briefcase:hover .briefcase-handle {
  background-color: #444;
}

.glow {
  box-shadow: 0 0 20px rgba(0, 150, 255, 0.5);
}
</style>
