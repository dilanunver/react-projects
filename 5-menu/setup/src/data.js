const menu = [
  {
    id: 1,
    name: 'Duman',
    sex: 'male',
    age: 9,
    address: 'Ankara',
    phone: 5385837763,
    img: './dogsapp/item-3.jpg',
    desc: `Hi, there. I'm Duman, a big fella finding his way in this brave new world.
	  I'm a shy guy who is becoming more social and trusting. My crate is my safe space, but I like going for walks and romping around with playful dogs. 
	  Cats are OK, but new people, kids and loud noises can be scary! Give me a little time to get to know and trust you. We'll be friends in no time, I promise.
	  Things can be pretty frightening for me sometimes, but I'll feel a lot braver with you at my side. Are you the human hero I'm looking for? Apply to meet me today! `,
  },
  {
    id: 2,
    name: 'Anten',
    sex: 'female',
    age: 10,
    address: 'İzmir',
    phone: 5385837763,
    img: './dogsapp/item-4.jpg',
    desc: `Cheers, I'm Anten! I'm a loving and medium energy lady looking for her forever home. I would really shine in a calm and structured environment!
	   I know all my basic commands like house training, crate training and leash walking. I really enjoy learning new stuff and pleasing my people. 
	   I can be a choosy about my dog friends, so slow and patient intros are best to help me feel comfortable. 
	   Serious cuddlers only, please!! Cuddling is my passion and I love to be close to my people. I'm a big ol' couch potato and I can spend my whole day there if you let me. 
	  (Are there pillows? PLEASE say there are pillows!) I would do best with older kiddos who are gentle with doggos like me. `,
  },
  {
    id: 3,
    name: 'Isot',
    sex: 'male',
    age: 7,
    address: 'Antalya',
    phone: 5385837763,
    img: './dogsapp/item-7.jpg',
    desc: `Ahoy, friends! My name is Isot! I'm a very smart seven-year-old boy who loves to show off about it. My foster mom says she thinks I've had training in my prior life. 
	   I know all my commands, make great eye contact, and just want to please. I always look for affirmation!
	   If you're looking for a new family member who loves going for walks, car rides, and sunbathing while lying on his back, then I'm your guy. Apply to meet me!`,
  },
  {
    id: 4,
    name: 'Kahve',
    sex: 'male',
    age: 8,
    address: 'Mersin',
    phone: 5385837763,
    img: './dogsapp/item-8.jpg',
    desc: `Hi everybody! My name is Kahve and, as you can see, I'm such a handsome, spotted boy who is looking for his forever home.
	   I would love a family who is patient and confident. I can be timid in new situations, but I feel much better if I have my person (or people) there to support me.
	   I know all my basic commands and am very cooperative about going in my crate when I'm told. I'm very smart and eager to please. Are you looking for the biggest cuddle machine in all the land? Apply to meet me! `,
  },
  {
    id: 5,
    name: 'Kori',
    sex: 'female',
    age: 5,
    address: 'Kocaeli',
    phone: 5385837763,
    img: './dogsapp/item-6.jpg',
    desc: `Hello, I'm Kori. I've spent nearly my whole life in this awesome rescue! I've worked hard, and I'm ready for my forever home. 
	Do you like tricks and treats? I'm your girl. Learning new things is my strong suit, and I love a long hike with my person, too.
	Are you the human hero I'm waiting for? Apply to meet me today!`,
  },
  {
    id: 6,
    name: 'Patik',
    sex: 'male',
    age: 4,
    address: 'Ankara',
    phone: 5385837763,
    img: './dogsapp/item-9.jpg',
    desc: `My name is Patik, but you can call me Pat for short! (I am still working on the fetch part.)
	   I'm super friendly and I love, love, love playing with other dogs. I used to be BFFs with a cat at the shelter I came from. 
	   (Although sometimes chasing kitties is just as fun...) I bet I would be great with kids, but just know that I can get a little bouncy when I'm excited.
	   If you're looking for a medium energy buddy to take on adventures and then snuggle up with on the couch, you found him. Apply to meet me today!`,
  },
  {
    id: 7,
    name: 'Uzum',
    sex: 'female',
    age: 7,
    address: 'İstanbul',
    phone: 5385837763,
    img: './dogsapp/item-2.jpg',
    desc: `Hi everybody, my name is Uzum! I'm a wiggly girl who is looking to be your family's 55-pound lap dog for life. I love toys and am allll about the balls. 
	   I carry my ball around with me the entire time I'm outside. I'm a power chewer for sure, so I'll need my toy bin to always be fully stocked! 
          My perfect day looks something like this: fetch, eat, sleep, repeat. Does this sound like your family's lifestyle, too? Apply to meet me!`,
  },
  {
    id: 8,
    name: 'Pasa',
    sex: 'male',
    age: 5,
    address: 'Adana',
    phone: 5385837763,
    img: './dogsapp/item-1.jpg',
    desc: `Hey, everyone! My name is Pasa. I'm a happy-go-lucky guy with a sweet personality who loves to snuggle and be by your side. 
	   I also like to play with my toys and go for long walk with you. I do have some very irresistible qualities, like an amazing wiggle when I'm really happy and a signature high-five move just to make you smile. 
	   I even like to surprise you with a little dog talk. I promise to be extra loyal, bring you lots of happiness and be an incredibly good boy. 
	   Apply to meet me! I could be the companion you've been looking for - and you could be the forever family I'm dreaming of.`,
  },
  {
    id: 9,
    name: 'Kete',
    sex: 'female',
    age: 6,
    address: 'Aydın',
    phone: 5385837763,
    img: './dogsapp/item-5.jpg',
    desc: `Hello world, my name is Kete, named after this little area in Turkey that makes extraordinary wine, and extraordinary I am. 
	  I am not quite ready for adoption yet, my foster mommy told me I still need to get spayed and going through therapy. So it will be a little while before somebody can snatch me and love me forever.
	  So follow my story and I will see you soon when I am ready for adoption!  `,
  },
  {
    id: 10,
    name: 'Loki',
    sex: 'female',
    age: 5,
    address: 'Konya',
    phone: 5385837763,
    img: './dogsapp/item-10.jpg',
    desc: `I'm Loki, the BFF you've been looking for. I'm a low-drama girl who is always here to listen, go for joy rides, hang out on the patio or just sleep in and watch Netflix. 
	   I'm looking for a mellow family to vibe with! I can't wait to meet you and give you five million kisses before committing to a life-long snuggle session. Apply to meet me now`
  },
  {
    id: 11,
    name: 'Fırtına',
    sex: 'female',
    age: 1,
    address: 'İzmir',
    phone: 5385837763,
    img: './dogsapp/item-11.jpg',
    desc: `My foster family is still learning all about me! Check back soon for more updates!`,
  },
  {
    id: 12,
    name: 'Golge',
    sex: 'male',
    age: 7,
    address: 'Adana',
    phone: 5385837763,
    img: './dogsapp/item-12.jpeg',
    desc: `Cheers, I'm Anten! I'm a loving and medium energy lady looking for her forever home. I would really shine in a calm and structured environment!
	   I know all my basic commands like house training, crate training and leash walking. I really enjoy learning new stuff and pleasing my people. 
	   I can be a choosy about my dog friends, so slow and patient intros are best to help me feel comfortable. 
	   Serious cuddlers only, please!! Cuddling is my passion and I love to be close to my people. I'm a big ol' couch potato and I can spend my whole day there if you let me. 
	  (Are there pillows? PLEASE say there are pillows!) I would do best with older kiddos who are gentle with doggos like me. `,
  },
  {
    id: 13,
    name: 'Isot',
    sex: 'male',
    age: 7,
    address: 'Antalya',
    phone: 5385837763,
    img: './dogsapp/item-7.jpg',
    desc: `Ahoy, friends! My name is Isot! I'm a very smart seven-year-old boy who loves to show off about it. My foster mom says she thinks I've had training in my prior life. 
	   I know all my commands, make great eye contact, and just want to please. I always look for affirmation!
	   If you're looking for a new family member who loves going for walks, car rides, and sunbathing while lying on his back, then I'm your guy. Apply to meet me!`,
  },
  {
    id: 14,
    name: 'Kahve',
    sex: 'male',
    age: 8,
    address: 'Mersin',
    phone: 5385837763,
    img: './dogsapp/item-8.jpg',
    desc: `Hi everybody! My name is Kahve and, as you can see, I'm such a handsome, spotted boy who is looking for his forever home.
	   I would love a family who is patient and confident. I can be timid in new situations, but I feel much better if I have my person (or people) there to support me.
	   I know all my basic commands and am very cooperative about going in my crate when I'm told. I'm very smart and eager to please. Are you looking for the biggest cuddle machine in all the land? Apply to meet me! `,
  },
  {
    id: 15,
    name: 'Kori',
    sex: 'female',
    age: 5,
    address: 'Kocaeli',
    phone: 5385837763,
    img: './dogsapp/item-6.jpg',
    desc: `Hello, I'm Kori. I've spent nearly my whole life in this awesome rescue! I've worked hard, and I'm ready for my forever home. 
	Do you like tricks and treats? I'm your girl. Learning new things is my strong suit, and I love a long hike with my person, too.
	Are you the human hero I'm waiting for? Apply to meet me today!`,
  },
  {
    id: 16,
    name: 'Patik',
    sex: 'male',
    age: 4,
    address: 'Ankara',
    phone: 5385837763,
    img: './dogsapp/item-9.jpg',
    desc: `My name is Patik, but you can call me Pat for short! (I am still working on the fetch part.)
	   I'm super friendly and I love, love, love playing with other dogs. I used to be BFFs with a cat at the shelter I came from. 
	   (Although sometimes chasing kitties is just as fun...) I bet I would be great with kids, but just know that I can get a little bouncy when I'm excited.
	   If you're looking for a medium energy buddy to take on adventures and then snuggle up with on the couch, you found him. Apply to meet me today!`,
  },
  {
    id: 17,
    name: 'Uzum',
    sex: 'female',
    age: 7,
    address: 'İstanbul',
    phone: 5385837763,
    img: './dogsapp/item-2.jpg',
    desc: `Hi everybody, my name is Uzum! I'm a wiggly girl who is looking to be your family's 55-pound lap dog for life. I love toys and am allll about the balls. 
	   I carry my ball around with me the entire time I'm outside. I'm a power chewer for sure, so I'll need my toy bin to always be fully stocked! 
          My perfect day looks something like this: fetch, eat, sleep, repeat. Does this sound like your family's lifestyle, too? Apply to meet me!`,
  },
  {
    id: 18,
    name: 'Pasa',
    sex: 'male',
    age: 5,
    address: 'Adana',
    phone: 5385837763,
    img: './dogsapp/item-1.jpg',
    desc: `Hey, everyone! My name is Pasa. I'm a happy-go-lucky guy with a sweet personality who loves to snuggle and be by your side. 
	   I also like to play with my toys and go for long walk with you. I do have some very irresistible qualities, like an amazing wiggle when I'm really happy and a signature high-five move just to make you smile. 
	   I even like to surprise you with a little dog talk. I promise to be extra loyal, bring you lots of happiness and be an incredibly good boy. 
	   Apply to meet me! I could be the companion you've been looking for - and you could be the forever family I'm dreaming of.`,
  },
  {
    id: 19,
    name: 'Kete',
    sex: 'female',
    age: 6,
    address: 'Aydın',
    phone: 5385837763,
    img: './dogsapp/item-5.jpg',
    desc: `Hello world, my name is Kete, named after this little area in Turkey that makes extraordinary wine, and extraordinary I am. 
	  I am not quite ready for adoption yet, my foster mommy told me I still need to get spayed and going through therapy. So it will be a little while before somebody can snatch me and love me forever.
	  So follow my story and I will see you soon when I am ready for adoption!  `,
  },
  {
    id: 20,
    name: 'Loki',
    sex: 'female',
    age: 5,
    address: 'Konya',
    phone: 5385837763,
    img: './dogsapp/item-10.jpg',
    desc: `I'm Loki, the BFF you've been looking for. I'm a low-drama girl who is always here to listen, go for joy rides, hang out on the patio or just sleep in and watch Netflix. 
	   I'm looking for a mellow family to vibe with! I can't wait to meet you and give you five million kisses before committing to a life-long snuggle session. Apply to meet me now`
  },
];
export default menu;
