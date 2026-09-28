// ======================================
// REGISTER GSAP SCROLLTRIGGER
// ======================================

gsap.registerPlugin(ScrollTrigger);


// ======================================
// HERO ANIMATION
// ======================================

const heroTimeline = gsap.timeline();

heroTimeline
    .from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1
    })

    .from(".small-text", {
        y: 30,
        opacity: 0,
        duration: 0.8
    })

    .from(".hero h1", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })

    .from(".hero h2", {
        y: 50,
        opacity: 0,
        duration: 0.8
    })

    .from(".description", {
        y: 30,
        opacity: 0,
        duration: 0.7
    })

    .from(".buttons", {
        y: 30,
        opacity: 0,
        duration: 0.7
    });


// ======================================
// SECTION NUMBERS
// ======================================

gsap.utils.toArray(".section-number").forEach(section => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },

        x: -50,
        opacity: 0,
        duration: 0.8

    });

});


// ======================================
// SECTION HEADINGS
// ======================================

gsap.utils.toArray(
    ".section-title, .section-heading"
).forEach(heading => {

    gsap.from(heading, {

        scrollTrigger: {
            trigger: heading,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },

        y: 100,
        opacity: 0,
        duration: 1,

        ease: "power3.out"

    });

});


// ======================================
// ABOUT TEXT
// ======================================

gsap.from(".section-description", {

    scrollTrigger: {
        trigger: ".section-description",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },

    y: 50,
    opacity: 0,
    duration: 1

});


// ======================================
// SKILLS ANIMATION
// ======================================

gsap.utils.toArray(".skill").forEach((skill, index) => {

    gsap.from(skill, {

        scrollTrigger: {
            trigger: skill,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },

        y: 60,
        opacity: 0,

        duration: 0.7,

        delay: index * 0.08,

        ease: "power2.out"

    });

});


// ======================================
// PROJECT CARDS
// ======================================

gsap.utils.toArray(".project-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },

        y: 100,
        opacity: 0,

        duration: 0.9,

        delay: index * 0.15,

        ease: "power3.out"

    });

});


// ======================================
// CONTACT ANIMATION
// ======================================

gsap.from(".contact h2", {

    scrollTrigger: {
        trigger: ".contact",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },

    scale: 0.8,
    opacity: 0,

    duration: 1.2,

    ease: "power3.out"

});


// ======================================
// PROJECT HOVER
// ======================================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {

            scale: 1.02,
            duration: 0.3

        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {

            scale: 1,
            duration: 0.3

        });

    });

});


/* =====================================================
   CINEMATIC 3D DATA SCIENCE BACKGROUND
===================================================== */

const canvas = document.getElementById("three-bg");

if (canvas && typeof THREE !== "undefined") {

    /* -----------------------------
       SCENE
    ----------------------------- */

    const scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2(
        0x030303,
        0.035
    );


    /* -----------------------------
       CAMERA
    ----------------------------- */

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(
        0,
        0,
        18
    );


    /* -----------------------------
       RENDERER
    ----------------------------- */

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.setClearColor(
        0x030303,
        1
    );


    /* -----------------------------
       MAIN GROUP
    ----------------------------- */

    const world = new THREE.Group();

    scene.add(world);


    /* =================================================
       PARTICLES
    ================================================= */

    const particleCount =
    window.innerWidth < 768 ? 450 : 1400;

    const particleGeometry =
        new THREE.BufferGeometry();

    const particlePositions =
        new Float32Array(
            particleCount * 3
        );

    for (let i = 0; i < particleCount; i++) {

        const i3 = i * 3;

        particlePositions[i3] =
            (Math.random() - 0.5) * 45;

        particlePositions[i3 + 1] =
            (Math.random() - 0.5) * 28;

        particlePositions[i3 + 2] =
            (Math.random() - 0.5) * 35;
    }

    particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            particlePositions,
            3
        )
    );

    const particleMaterial =
        new THREE.PointsMaterial({

            color: 0x6b7cff,

            size:
                window.innerWidth < 768
                    ? 0.035
                    : 0.045,

            transparent: true,

            opacity: 0.65,

            blending:
                THREE.AdditiveBlending,

            depthWrite: false
        });

    const particles =
        new THREE.Points(
            particleGeometry,
            particleMaterial
        );

    world.add(particles);


    /* =================================================
       SECOND PARTICLE FIELD
    ================================================= */

    const particleGeometry2 =
        new THREE.BufferGeometry();

    const particlePositions2 =
        new Float32Array(
            350 * 3
        );

    for (let i = 0; i < 350; i++) {

        const i3 = i * 3;

        particlePositions2[i3] =
            (Math.random() - 0.5) * 25;

        particlePositions2[i3 + 1] =
            (Math.random() - 0.5) * 18;

        particlePositions2[i3 + 2] =
            (Math.random() - 0.5) * 20;
    }

    particleGeometry2.setAttribute(
        "position",
        new THREE.BufferAttribute(
            particlePositions2,
            3
        )
    );

    const particleMaterial2 =
    new THREE.PointsMaterial({

        color: 0xff4060,

        size: 0.035,

        transparent: true,

        opacity:
            window.innerWidth < 768
                ? 0.25
                : 0.5,

        blending:
            THREE.AdditiveBlending,

        depthWrite: false
    });

    const particles2 =
        new THREE.Points(
            particleGeometry2,
            particleMaterial2
        );

    world.add(particles2);


    /* =================================================
       GLOWING ORBIT RINGS
    ================================================= */

    const ringGroup =
        new THREE.Group();

    world.add(ringGroup);


    function createRing(
        radius,
        color,
        rotationX,
        rotationY,
        opacity
    ) {

        const geometry =
            new THREE.TorusGeometry(
                radius,
                0.018,
                8,
                160
            );

        const material =
            new THREE.MeshBasicMaterial({

                color: color,

                transparent: true,

                opacity: opacity,

                blending:
                    THREE.AdditiveBlending
            });

        const ring =
            new THREE.Mesh(
                geometry,
                material
            );

        ring.rotation.x =
            rotationX;

        ring.rotation.y =
            rotationY;

        ringGroup.add(ring);

        return ring;
    }


    const ring1 =
        createRing(
            5,
            0xff3158,
            Math.PI / 2.4,
            0.2,
            0.65
        );


    const ring2 =
        createRing(
            6.5,
            0x536dff,
            Math.PI / 2.1,
            -0.4,
            0.45
        );


    const ring3 =
        createRing(
            8,
            0x00c8ff,
            Math.PI / 1.8,
            0.7,
            0.3
        );


    /* =================================================
       CENTRAL GLOWING CORE
    ================================================= */

    const coreGeometry =
        new THREE.SphereGeometry(
            0.35,
            32,
            32
        );

    const coreMaterial =
        new THREE.MeshBasicMaterial({

            color: 0xff3158,

            transparent: true,

            opacity: 0.9
        });

    const core =
        new THREE.Mesh(
            coreGeometry,
            coreMaterial
        );

    world.add(core);


    /* =================================================
       WIREFRAME DATA CUBES
    ================================================= */

    const cubeGroup =
        new THREE.Group();

    world.add(cubeGroup);


    function createDataCube(
        x,
        y,
        z,
        size,
        color
    ) {

        const geometry =
            new THREE.BoxGeometry(
                size,
                size,
                size
            );

        const material =
            new THREE.MeshBasicMaterial({

                color: color,

                wireframe: true,

                transparent: true,

                opacity: 0.45
            });

        const cube =
            new THREE.Mesh(
                geometry,
                material
            );

        cube.position.set(
            x,
            y,
            z
        );

        cubeGroup.add(cube);

        return cube;
    }


    const cube1 =
        createDataCube(
            -6,
            3,
            -2,
            1.8,
            0x566cff
        );


    const cube2 =
        createDataCube(
            6,
            -2,
            -3,
            2.2,
            0xff3158
        );


    const cube3 =
        createDataCube(
            -5,
            -4,
            -1,
            1.2,
            0x00c8ff
        );


    const cube4 =
        createDataCube(
            5,
            4,
            -4,
            1.5,
            0x8b5cff
        );


    /* =================================================
       MOUSE MOVEMENT
    ================================================= */

    let mouseX = 0;
    let mouseY = 0;

    let targetMouseX = 0;
    let targetMouseY = 0;


    window.addEventListener(
        "mousemove",
        (event) => {

            targetMouseX =
                (event.clientX /
                    window.innerWidth -
                    0.5);

            targetMouseY =
                (event.clientY /
                    window.innerHeight -
                    0.5);
        }
    );


    /* =================================================
       TOUCH MOVEMENT FOR MOBILE
    ================================================= */

    window.addEventListener(
        "touchmove",
        (event) => {

            if (!event.touches.length)
                return;

            const touch =
                event.touches[0];

            targetMouseX =
                (touch.clientX /
                    window.innerWidth -
                    0.5);

            targetMouseY =
                (touch.clientY /
                    window.innerHeight -
                    0.5);
        },
        { passive: true }
    );


    /* =================================================
       SCROLL
    ================================================= */

    let scrollProgress = 0;

    window.addEventListener(
        "scroll",
        () => {

            const maxScroll =
                document.documentElement
                    .scrollHeight -
                window.innerHeight;

            scrollProgress =
                maxScroll > 0
                    ? window.scrollY / maxScroll
                    : 0;
        },
        { passive: true }
    );


    /* =================================================
       ANIMATION
    ================================================= */

    const clock =
        new THREE.Clock();


    function animate() {

        requestAnimationFrame(
            animate
        );

        const elapsed =
            clock.getElapsedTime();


        /* Smooth mouse */

        mouseX +=
            (targetMouseX - mouseX)
            * 0.025;

        mouseY +=
            (targetMouseY - mouseY)
            * 0.025;


        /* Particle movement */

        particles.rotation.y =
            elapsed * 0.015;

        particles.rotation.x =
            elapsed * 0.006;

        particles2.rotation.y =
            -elapsed * 0.025;


        /* Rings */

        ring1.rotation.z =
            elapsed * 0.12;

        ring1.rotation.x =
            Math.PI / 2.4 +
            Math.sin(elapsed * 0.4)
            * 0.08;

        ring2.rotation.z =
            -elapsed * 0.08;

        ring3.rotation.z =
            elapsed * 0.05;


        /* Core */

        core.scale.setScalar(
            1 +
            Math.sin(elapsed * 2) *
            0.12
        );


        /* Cubes */

        cube1.rotation.x =
            elapsed * 0.3;

        cube1.rotation.y =
            elapsed * 0.4;

        cube2.rotation.x =
            -elapsed * 0.2;

        cube2.rotation.z =
            elapsed * 0.35;

        cube3.rotation.y =
            elapsed * 0.5;

        cube4.rotation.x =
            elapsed * 0.25;

        cube4.rotation.y =
            -elapsed * 0.3;


        /* Mouse parallax */

        world.rotation.y +=
            (
                mouseX * 0.08 -
                world.rotation.y
            ) * 0.02;

        world.rotation.x +=
            (
                -mouseY * 0.05 -
                world.rotation.x
            ) * 0.02;


        /* Scroll movement */

        world.position.y =
            scrollProgress * -3;

        world.rotation.z =
            scrollProgress * 0.15;


        /* Camera movement */

        camera.position.x +=
            (
                mouseX * 1.2 -
                camera.position.x
            ) * 0.02;

        camera.position.y +=
            (
                -mouseY * 0.8 -
                camera.position.y
            ) * 0.02;


        camera.lookAt(
            0,
            0,
            0
        );


        renderer.render(
            scene,
            camera
        );
    }


    animate();


    /* =================================================
       RESPONSIVE RESIZE
    ================================================= */

    function resizeThree() {

        const width =
            window.innerWidth;

        const height =
            window.innerHeight;

        camera.aspect =
            width / height;

        camera.updateProjectionMatrix();

        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );

        renderer.setSize(
            width,
            height
        );
    }


    window.addEventListener(
        "resize",
        resizeThree
    );
}