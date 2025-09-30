## V1 code timeline

- HTML

```bash
<section class="experience-section">
    <h1 class="section-title">Work Experience.</h1>
    <div class="timeline">
      
      <!-- Experience 1 -->
      <div class="timeline-item left">

        <div class="experience-card">
          <h2 class="job-title">React.js Developer</h2>
          <p class="company">Starbucks</p>

          <ul>
            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
          </ul>

        </div>

        <div class="timeline-marker">
          <div class="marker-circle">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="Starbucks">
          </div>
          <span class="timeline-date">March 2020 - April 2021</span>
        </div>

      </div>

      <!-- Experience 2 -->
      <div class="timeline-item right">
        <div class="experience-card">
          <h2 class="job-title">React Native Developer</h2>
          <p class="company">Tesla</p>
          <ul>
            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
          </ul>
        </div>
        <div class="timeline-marker">
          <div class="marker-circle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" alt="Tesla">
          </div>
          <span class="timeline-date">Jan 2021 - Feb 2022</span>
        </div>
      </div>
    </div>
  </section>

```

- css

```bash

    /* Carte d'expérience */
    .experience-card {
      flex: 1;
      max-width: 500px;
      background: linear-gradient(135deg, rgba(30, 30, 50, 0.8), rgba(20, 20, 35, 0.9));
      border: 2px solid rgba(124, 58, 237, 0.3);
      border-radius: 15px;
      padding: 30px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    .timeline-item.left .experience-card {
      margin-right: auto;
    }

    .timeline-item.right .experience-card {
      margin-left: auto;
    }

    .job-title {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .company {
      font-size: 18px;
      color: #a78bfa;
      margin-bottom: 20px;
    }

    .experience-card ul {
      list-style: none;
      padding: 0;
    }

    .experience-card li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 12px;
      color: #ccc;
      line-height: 1.6;
      font-size: 15px;
    }

    .experience-card li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #7c3aed;
      font-size: 20px;
    }

    /* Marqueur timeline (cercle + date) */
    .timeline-marker {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
    
    /* Boite à gauche = date à droite du cercle */
    .timeline-item.left .timeline-marker {
      flex-direction: row;
    }
    
    /* Boite à droite = date à gauche du cercle */
    .timeline-item.right .timeline-marker {
      flex-direction: row-reverse;
    }

    .marker-circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #1a1a2e;
      border: 3px solid #7c3aed;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
    }

    .marker-circle img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }

    .timeline-date {
      font-size: 16px;
      color: #a78bfa;
      font-weight: 600;
      white-space: nowrap;
      background: rgba(10, 10, 15, 0.9);
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid rgba(124, 58, 237, 0.3);
    }
```