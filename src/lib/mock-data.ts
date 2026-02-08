
export const diseases = [
  {
    id: "apple-scab",
    name: "Apple Scab",
    plant: "Apple & Crabapple",
    imageUrlId: "disease-apple-scab",
    description: "Apple scab is a common disease of trees in the rose family that is caused by the fungus Venturia inaequalis. It can cause significant cosmetic damage to fruit and, in severe cases, leaf loss.",
    symptoms: [
      "Olive-green to brown spots on leaves, fruit, and twigs.",
      "Spots may have a velvety texture.",
      "Infected leaves may become twisted and puckered.",
      "Fruit lesions become dark, corky, and cracked.",
    ],
    commonCauses: [
        "Fungus (Venturia inaequalis) overwintering on infected fallen leaves and fruit.",
        "Cool, wet spring weather (60-75°F / 15-24°C) which promotes spore release.",
        "Poor air circulation in the tree canopy, which keeps leaves wet for extended periods."
    ],
    prevention: [
      "Choose resistant varieties when planting.",
      "Rake and destroy fallen leaves in autumn to reduce overwintering fungus.",
      "Prune trees to improve air circulation, which helps leaves dry faster.",
    ],
    treatment: [
        "Fungicides are most effective when applied preventatively. Recommended for severe cases.",
        "Apply fungicides containing captan, sulfur, or myclobutanil.",
        "Follow label instructions carefully, starting from bud break and continuing through the rainy season."
    ]
  },
  {
    id: "tomato-blight",
    name: "Tomato Late Blight",
    plant: "Tomato & Potato",
    imageUrlId: "disease-tomato-blight",
    description: "Late blight, caused by the oomycete Phytophthora infestans, is a devastating disease of tomatoes and potatoes. It spreads rapidly in cool, wet weather and can destroy an entire crop.",
    symptoms: [
      "Large, dark, water-soaked spots on leaves and stems.",
      "A white, fuzzy mold may appear on the underside of leaves.",
      "Stems can become brittle and break.",
      "Fruit develops large, firm, brown, greasy-looking lesions.",
    ],
    commonCauses: [
        "The water mold Phytophthora infestans.",
        "Cool, moist conditions (60-70°F / 15-21°C) with high humidity or frequent rain.",
        "Spores can travel long distances on the wind.",
        "Infected potato tubers or volunteer tomato plants from the previous season."
    ],
    prevention: [
      "Plant certified disease-free seeds and plants.",
      "Ensure good spacing between plants for air circulation.",
      "Water at the base of the plant to keep foliage dry.",
      "Monitor weather forecasts; apply preventative fungicides before cool, wet periods.",
    ],
    treatment: [
        "Once established, late blight is very difficult to control. Act quickly.",
        "Remove and destroy infected plants immediately. Do not compost them.",
        "Apply targeted fungicides containing copper, chlorothalonil, or mancozeb.",
        "Alternate fungicides to prevent resistance."
    ]
  },
  {
    id: "powdery-mildew",
    name: "Powdery Mildew",
    plant: "Various (Cucurbits, Roses, etc.)",
    imageUrlId: "disease-powdery-mildew",
    description: "Powdery mildew is a fungal disease that affects a wide range of plants. It is easily recognizable by its white, powdery spots on leaves and stems. While not usually fatal, it can reduce photosynthesis and weaken the plant.",
    symptoms: [
      "White, powdery patches on the upper surface of leaves, stems, and flowers.",
      "Infected leaves may turn yellow and drop prematurely.",
      "Distorted shoot growth and flowers.",
    ],
    commonCauses: [
        "Various species of fungi that thrive in both high humidity and dry conditions.",
        "Poor air circulation and crowded planting.",
        "Shady conditions can encourage its development.",
        "Spores are spread by wind."
    ],
    prevention: [
      "Provide good air circulation by not overcrowding plants.",
      "Avoid overhead watering to reduce humidity.",
      "Plant in sunny locations, as mildew often thrives in shade.",
      "Choose resistant plant varieties whenever possible."
    ],
    treatment: [
        "Spray with horticultural oils, neem oil, or potassium bicarbonate-based solutions.",
        "A solution of 1 part milk to 9 parts water can be an effective preventative spray.",
        "For severe infections, fungicides containing sulfur or myclobutanil can be used.",
        "Remove and destroy heavily infected leaves to reduce spread."
    ]
  },
  {
    id: "black-spot",
    name: "Black Spot",
    plant: "Rose",
    imageUrlId: "disease-black-spot",
    description: "Black spot is a common fungal disease of roses caused by Diplocarpon rosae. It manifests as black spots on leaves, which then turn yellow and fall off, weakening the plant.",
    symptoms: [
      "Black spots with fringed or feathery margins on the upper surface of leaves.",
      "The leaf area surrounding the spots turns yellow.",
      "Infected leaves often drop prematurely, leading to defoliation.",
      "Raised, reddish-purple spots may appear on canes."
    ],
    commonCauses: [
      "Fungus (Diplocarpon rosae) overwintering in fallen leaves and on infected canes.",
      "Wet leaf surfaces for 6-9 hours are required for spores to germinate.",
      "Warm, humid weather promotes the disease."
    ],
    prevention: [
      "Plant resistant rose varieties.",
      "Clean up all fallen leaves and debris around plants.",
      "Water at the base of the plant in the morning to allow leaves to dry.",
      "Prune to improve air circulation."
    ],
    treatment: [
      "Remove and destroy infected leaves and canes as soon as they appear.",
      "Apply preventative fungicides (e.g., myclobutanil, chlorothalonil, mancozeb) starting in early spring.",
      "Neem oil or horticultural oil can be effective if applied regularly."
    ]
  },
  {
    id: "corn-common-rust",
    name: "Corn Common Rust",
    plant: "Corn",
    imageUrlId: "disease-corn-rust",
    description: "Common rust is a fungal disease of corn caused by Puccinia sorghi. It produces characteristic cinnamon-brown pustules on leaves, which can reduce photosynthetic area and affect yield if severe.",
    symptoms: [
      "Small, oval to elongated, cinnamon-brown pustules on both upper and lower leaf surfaces.",
      "Pustules rupture, releasing powdery reddish-brown spores.",
      "Pustules darken to black as the plant matures.",
      "In severe cases, leaves can yellow and die."
    ],
    commonCauses: [
      "Fungus (Puccinia sorghi) spores carried by wind from southern regions.",
      "Moderate temperatures (60-77°F / 16-25°C) and high humidity.",
      "Infection typically occurs on younger, upper leaves."
    ],
    prevention: [
      "Planting resistant or tolerant corn hybrids is the most effective method.",
      "Scout fields early, especially in susceptible hybrids.",
      "Early planting can sometimes help the crop mature before rust becomes severe."
    ],
    treatment: [
      "Foliar fungicides can be effective if applied at the first sign of disease on susceptible hybrids.",
      "Applications are most beneficial when made between tasseling and early silking stages.",
      "Commonly used fungicides include strobilurins and triazoles."
    ]
  },
  {
    id: "grape-black-rot",
    name: "Grape Black Rot",
    plant: "Grape",
    imageUrlId: "disease-grape-black-rot",
    description: "Black rot, caused by the fungus Guignardia bidwellii, is one of the most serious diseases of grapes in warm, humid climates. It can infect leaves, shoots, and fruit, potentially destroying the entire crop.",
    symptoms: [
      "Small, reddish-brown circular spots on leaves that enlarge and develop black pinpoint fruiting bodies.",
      "Elongated black lesions on shoots and tendrils.",
      "Infected berries turn brown, then shrivel into hard, black, wrinkled 'mummies'.",
      "Mummies are covered in black, pimple-like fruiting bodies."
    ],
    commonCauses: [
      "The fungus Guignardia bidwellii overwintering in mummified berries and cane lesions.",
      "Warm, wet weather is required for infection.",
      "Spores are splashed by rain onto new growth."
    ],
    prevention: [
      "Sanitation is critical: remove and destroy all mummified fruit and infected canes during dormant pruning.",
      "Choose a planting site with good air circulation and sun exposure.",
      "Promote rapid drying of foliage by controlling weeds and pruning.",
      "Planting resistant varieties can reduce disease pressure."
    ],
    treatment: [
      "A preventative fungicide spray program is essential for control in susceptible areas.",
      "Apply fungicides from early shoot growth until the berries begin to ripen.",
      "Effective fungicides include mancozeb, captan, and myclobutanil."
    ]
  },
  {
    id: "peach-leaf-curl",
    name: "Peach Leaf Curl",
    plant: "Peach & Nectarine",
    imageUrlId: "disease-peach-leaf-curl",
    description: "Peach leaf curl is a fungal disease caused by Taphrina deformans. It affects the leaves, flowers, and fruit of peach and nectarine trees, causing distorted growth in early spring.",
    symptoms: [
      "Leaves become thickened, puckered, and curled.",
      "Affected leaves are often reddish or purplish, then turn pale green or yellow.",
      "A grayish-white powdery spore layer may cover the leaves.",
      "Infected leaves eventually wither and drop.",
      "Fruit may be scarred or drop prematurely."
    ],
    commonCauses: [
      "Fungus (Taphrina deformans) that overwinters on the tree's bark and bud scales.",
      "Spores infect new leaves as buds swell in the spring.",
      "Cool, wet weather (below 61°F / 16°C) during bud break promotes infection."
    ],
    prevention: [
      "Planting resistant varieties is the best long-term strategy.",
      "A single, well-timed fungicide spray during the dormant season is the primary control method."
    ],
    treatment: [
      "Fungicide sprays are only effective if applied before buds begin to swell.",
      "The most critical time to spray is in late fall after leaf drop or in late winter/early spring before bud break.",
      "Use fungicides containing copper, chlorothalonil, or ziram.",
      "Once symptoms appear on leaves, it is too late to treat for the current season."
    ]
  },
  {
    id: "downy-mildew",
    name: "Downy Mildew",
    plant: "Cucurbits, Grapes, Basil",
    imageUrlId: "disease-downy-mildew",
    description: "Downy mildew is a disease caused by water molds (oomycetes). It primarily affects plant leaves, causing yellow spots and a downy growth, and can spread rapidly in cool, moist conditions.",
    symptoms: [
      "Yellow, angular spots on the upper surfaces of leaves, bounded by leaf veins.",
      "A fuzzy or downy growth, often purplish-gray, on the undersides of the leaves.",
      "Leaves may turn brown, shrivel, and die.",
      "Can lead to defoliation and reduced fruit quality."
    ],
    commonCauses: [
      "Various species of oomycetes, specific to the host plant.",
      "Cool, humid nights and mild, moist days are ideal for infection.",
      "Spores are spread by wind and rain splash."
    ],
    prevention: [
      "Improve air circulation through proper plant spacing and pruning.",
      "Avoid overhead watering; use drip irrigation if possible.",
      "Plant resistant varieties when available.",
      "Keep the garden free of weeds and plant debris."
    ],
    treatment: [
      "Fungicides are most effective when used preventatively.",
      "Apply fungicides containing copper, mancozeb, or chlorothalonil.",
      "For organic control, some copper-based and biological fungicides are available.",
      "Remove and destroy infected plant parts to slow the spread."
    ]
  },
  {
    id: "fire-blight",
    name: "Fire Blight",
    plant: "Apple & Pear",
    imageUrlId: "disease-fire-blight",
    description: "Fire blight is a destructive bacterial disease caused by Erwinia amylovora, primarily affecting apple and pear trees. It gives parts of the tree a scorched appearance, as if by fire.",
    symptoms: [
      "Blossoms and shoots wilt and turn black, often forming a characteristic 'shepherd's crook' at the tip.",
      "Leaves on infected branches turn dark brown to black and remain attached.",
      "A milky or amber-colored bacterial ooze may exude from infected tissues in humid weather.",
      "Cankers (dark, sunken areas) can form on branches and trunks."
    ],
    commonCauses: [
      "The bacterium Erwinia amylovora, which overwinters in cankers on infected trees.",
      "Bacteria are spread by splashing rain, wind, and insects (especially pollinators).",
      "Warm, humid weather during bloom is highly favorable for new infections."
    ],
    prevention: [
      "Avoid excessive nitrogen fertilization, which promotes susceptible succulent growth.",
      "Select resistant varieties or rootstocks.",
      "During the dormant season, prune out all cankers and dead branches, cutting well into healthy wood."
    ],
    treatment: [
      "Prune out infected shoots and branches as soon as they appear, cutting at least 8-12 inches below any visible symptoms. Sanitize pruning tools between cuts.",
      "Antibiotic sprays (streptomycin) can be applied during bloom to protect flowers, but timing is critical.",
      "Copper sprays applied during dormancy can help reduce the overwintering bacteria."
    ]
  }
];

export const articles = [
  {
    slug: "introduction-to-sustainable-farming",
    title: "An Introduction to Sustainable Farming",
    excerpt: "Learn the core principles of sustainable agriculture and how it benefits both the environment and your harvest.",
    author: "Ayush Das",
    date: "2024-05-15",
    imageUrlId: "article-sustainable-farming",
    content: `
      <p>Sustainable farming is a holistic approach to agriculture that focuses on producing food in a way that is ecologically sound, economically viable, and socially just. It's about working with nature, not against it, to create a resilient and productive food system for generations to come.</p>
      <h3 class="font-headline text-2xl mt-6 mb-2">Key Principles</h3>
      <ul>
        <li><strong>Environmental Health:</strong> Building and maintaining healthy soil, managing water wisely, minimizing air and water pollution, and promoting biodiversity.</li>
        <li><strong>Economic Profitability:</strong> Ensuring that farms can be profitable and provide a stable livelihood for farmers.</li>
        <li><strong>Social and Economic Equity:</strong> Promoting fair treatment for farmworkers and supporting local communities.</li>
      </ul>
      <h3 class="font-headline text-2xl mt-6 mb-2">Getting Started</h3>
      <p>Simple steps like composting, using cover crops, and practicing crop rotation can make a big difference. These methods help to build soil fertility, reduce the need for chemical fertilizers, and naturally suppress pests and diseases. By embracing sustainable practices, you're not just growing food; you're cultivating a healthier planet.</p>
    `,
  },
  {
    slug: "natural-pest-control-methods",
    title: "Effective Natural Pest Control Methods",
    excerpt: "Discover how to manage garden pests without resorting to harsh chemicals. Protect your plants and the ecosystem.",
    author: "Ayush Das",
    date: "2024-05-20",
    imageUrlId: "article-pest-control",
    content: `
      <p>A healthy garden is a balanced ecosystem. While some insects are pests, many are beneficial, preying on the very critters that want to eat your plants. The goal of natural pest control is not to eliminate all insects but to keep pest populations in check and encourage a thriving environment for their natural predators.</p>
      <h3 class="font-headline text-2xl mt-6 mb-2">Integrated Pest Management (IPM)</h3>
      <p>IPM is a strategy that focuses on long-term prevention. Here are some key techniques:</p>
      <ul>
        <li><strong>Biological Control:</strong> Introduce or attract beneficial insects like ladybugs, lacewings, and parasitic wasps. Planting flowers like dill and yarrow can help.</li>
        <li><strong>Cultural Control:</strong> Use crop rotation, companion planting (e.g., planting marigolds near tomatoes), and proper sanitation to disrupt pest cycles.</li>
        <li><strong>Mechanical Control:</strong> Use physical barriers like row covers, hand-pick larger pests like tomato hornworms, or use traps.</li>
        <li><strong>Soft Chemicals:</strong> If you must spray, opt for insecticidal soaps, horticultural oils, or neem oil, which have a lower impact on beneficial insects and the environment.</li>
      </ul>
    `,
  },
  {
    slug: "the-importance-of-soil-health",
    title: "Why Soil Health is the Foundation of a Great Garden",
    excerpt: "Dive deep into the world beneath your feet. Healthy soil means healthy plants. Here's how to build it.",
    author: "Ayush Das",
    date: "2024-05-25",
    imageUrlId: "article-soil-health",
    content: `
      <p>Healthy soil is a living, breathing ecosystem teeming with billions of bacteria, fungi, and other microorganisms. These tiny helpers are essential for cycling nutrients, retaining moisture, and defending plants against diseases. When you focus on feeding your soil, your soil will, in turn, feed your plants.</p>
      <h3 class="font-headline text-2xl mt-6 mb-2">Building Your Soil</h3>
      <ul>
        <li><strong>Add Organic Matter:</strong> Compost is the single best ingredient for your soil. It improves structure, water retention, and provides a slow-release source of nutrients. Add a fresh layer every year.</li>
        <li><strong>Keep it Covered:</strong> Use mulch (like straw, wood chips, or shredded leaves) or plant cover crops (like clover or vetch) to protect the soil from erosion, suppress weeds, and retain moisture.</li>
        <li><strong>Minimize Tilling:</strong> Tilling can destroy soil structure and harm beneficial organisms. Practice no-till or reduced-tillage methods where possible.</li>
        <li><strong>Test Your Soil:</strong> A simple soil test can tell you about your soil's pH and nutrient levels, allowing you to amend it precisely for what your plants need.</li>
      </ul>
    `,
  },
  {
    slug: "companion-planting-guide",
    title: "A Beginner's Guide to Companion Planting",
    excerpt: "Unlock the secrets of companion planting to create a healthier, more productive garden ecosystem.",
    author: "Ayush Das",
    date: "2024-06-01",
    imageUrlId: "article-companion-planting",
    content: `
      <p>Companion planting is the practice of growing different plants together for their mutual benefit. Some plants can help deter pests, others can improve soil health, and some can even enhance the flavor of their neighbors. It's a fantastic way to create a more resilient and self-sustaining garden.</p>
      <h3 class="font-headline text-2xl mt-6 mb-2">Classic Companions</h3>
      <ul>
        <li><strong>Tomatoes and Basil:</strong> Basil is known to repel tomato hornworms and whiteflies. Many gardeners also swear it improves the tomato's flavor.</li>
        <li><strong>Marigolds:</strong> The scent of marigolds deters many pests, including nematodes in the soil, making them a great companion for almost any vegetable.</li>
        <li><strong>The Three Sisters:</strong> A traditional Native American planting method of corn, beans, and squash. The corn provides a trellis for the beans, the beans fix nitrogen in the soil, and the large squash leaves shade the ground, preventing weeds.</li>
      </ul>
      <p>Start small by introducing a few companion plants into your garden beds and observe the results. It's a journey of discovery that can lead to a more vibrant and healthy garden.</p>
    `
  },
  {
    slug: "watering-101",
    title: "Watering Wisely: How to Hydrate Your Plants",
    excerpt: "Master the art of watering. Learn when, how much, and how often to water your plants to prevent common issues.",
    author: "Ayush Das",
    date: "2024-06-05",
    imageUrlId: "article-watering",
    content: `
      <p>Proper watering is one of the most critical aspects of plant care, yet it's often misunderstood. Both overwatering and underwatering can lead to serious problems, from root rot to stunted growth.</p>
      <h3 class="font-headline text-2xl mt-6 mb-2">Best Practices for Watering</h3>
      <ul>
        <li><strong>Water Deeply, Not Frequently:</strong> Encourage deep root growth by watering thoroughly and then allowing the soil to dry out partially before watering again. A light sprinkle every day does more harm than good.</li>
        <li><strong>Water the Soil, Not the Leaves:</strong> Wet foliage, especially overnight, can encourage fungal diseases like powdery mildew and blight. Use a soaker hose or water at the base of the plant.</li>
        <li><strong>Check the Soil:</strong> The best way to know if your plants need water is to check. Stick your finger about an inch or two into the soil. If it's dry, it's time to water.</li>
        <li><strong>Water in the Morning:</strong> Watering in the morning gives the plant time to absorb the moisture before the heat of the day and allows any wet foliage to dry, reducing disease risk.</li>
      </ul>
      <p>By following these simple rules, you can ensure your plants get the hydration they need to thrive without the risks associated with improper watering techniques.</p>
    `
  }
];

    