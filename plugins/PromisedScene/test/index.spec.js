const context = require("../../../context");
const plugin = require("../main");
const { expect } = require("chai");

describe("PromisedScene", () => {
  describe("When Populated Databases exist...", () => {
    it("Should have DB files with the Actor, Studio, Scene and date already", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "y",
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova's back and more flexible more than ever. She is looking fine and is extremely horny for some sweet stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Should not return an actor with a single name like 'PRESSLEY', even if it exists but allow for manual SEARCH success", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] PRESSLEY 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] PRESSLEY 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "",
            enterSceneTitle: "So Young So Sexy",
            enterStudioName: "New Sensations",
          },
          CorrectImportInfo: "y",
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova's back and more flexible more than ever. She is looking fine and is extremely horny for some sweet stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Should grab an alias for an actor Madison Swan = Mia Malkova", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Madison Swan 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] Madison Swan 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "y",
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova's back and more flexible more than ever. She is looking fine and is extremely horny for some sweet stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Should grab an alias with no spaces for an actor Madison Swan = Mia Malkova", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] MadisonSwan 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] MadisonSwan 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "y",
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova's back and more flexible more than ever. She is looking fine and is extremely horny for some sweet stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Search and Grab a scene with multiple parsed Actors, run a search and match based on title of scene - testing YY-MM-DD", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName:
          "[New Sensations] Riley Nixon, Mia Malkova 16.04.08 - Makes the Heart Skip a Beat.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] Riley Nixon, Mia Malkova 16.04.08 - Makes the Heart Skip a Beat.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "16.04.08",
            enterSceneTitle: "Makes the Heart Skip a Beat",
            enterStudioName: "New Sensations",
            manualActors: "Mia Malkova, Riley Nixon",
            manualDescription:
              "stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!",
            movieTitle: "",
            multipleChoice: "",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia could not stop thinking of Riley, her tutor, and wondered if she would ever have the courage to expose her true feelings towards her. When Riley asked Mia to pose nude for her art final, Mia jumped at the chance. Nervously as she posed, Riley expressed that, out of fear, she never told Mia how she felt. That gave Mia the opening she had desired for so long."
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Search and Grab a Scene that has multiple parsed Studios - testing dd.mm.yyyy", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[Bangbros clips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
        scenePath:
          "Z:\\Keep\\test\\[Bangbros clips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "04.01.2016",
            enterSceneTitle: "Flexible while getting pounded",
            enterStudioName: "Banbros clips",
            manualActors: "Mia Malkova",
            manualDescription:
              "stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!",
            movieTitle: "",
            multipleChoice: "",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova is one sexy all natural a babe. Sweet pair of tits, a tight pussy and a perfect round ass. She's fucking hot! Hands down! Mia shows off her cock sucking skills and then shows us how flexible she is. Ramon Nomar was fucking her good. Pounding that tight pussy good."
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("BANGBROS CLIPS");
    });
    it("Search and Grab a Scene that has multiple parsed Studios with no spaces - testing dd.mm.yyyy", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
        scenePath:
          "Z:\\Keep\\test\\[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "04.01.2016",
            enterSceneTitle: "Flexible while getting pounded",
            enterStudioName: "Bangbrosclips",
            manualActors: "Mia Malkova",
            manualDescription:
              "stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!",
            movieTitle: "",
            multipleChoice: "",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova is one sexy all natural a babe. Sweet pair of tits, a tight pussy and a perfect round ass. She's fucking hot! Hands down! Mia shows off her cock sucking skills and then shows us how flexible she is. Ramon Nomar was fucking her good. Pounding that tight pussy good."
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("BANGBROS CLIPS");
    });
    it("Select a scene from a list of returned searches", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova",
        scenePath: "Z:\\Keep\\test\\[New Sensations] Mia Malkova.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "",
            enterSceneTitle: "Mia Malkova New Sensations",
            enterStudioName: "New Sensations",
            manualActors: "",
            manualDescription: "",
            movieTitle: "",
            multipleChoice: "A Very Close Friend",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia is pleasantly surprised by her husband’s growing excitement when she confesses to sharing a stolen kiss with another woman. Redhead Katy did not hesitate taking another hot steamy affair with Mia, while her husband seemed to enjoy himself a little too much."
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Select 'none of the above' of the last 2 options in a rawlist, it should make the user select a choice.  Should return nothing because we assume we select 'do nothing' when asked again", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova",
        scenePath: "Z:\\Keep\\test\\[New Sensations] Mia Malkova.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "",
            enterSceneTitle: "New Sensations Mia Malkova",
            enterStudioName: "New Sensations",
            manualActors: "",
            manualDescription: "",
            movieTitle: "",
            multipleChoice: "== None of the above ==",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.deep.equal({});
    });
    it("list of returned searches, let the script find the title within the path name", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova - So Young So Sexy P.O.V. #08.mp4",
        scenePath: "Z:\\Keep\\test\\[New Sensations] Mia Malkova So Young So Sexy P.O.V. #08.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "",
            enterSceneTitle: "",
            enterStudioName: "New Sensations",
            manualActors: "",
            manualDescription: "",
            movieTitle: "",
            multipleChoice: "",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova's back and more flexible more than ever. She is looking fine and is extremely horny for some sweet stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("TPD not available and should not return anything because Manualinfo is = n", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova",
        scenePath: "Z:\\Keep\\test\\[New Sensations] Mia Malkova 2013.10.10.mp4",
        testMode: {
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "",
            enterSceneTitle: "New Sensations Mia Malkova",
            enterStudioName: "New Sensations",
            manualActors: "",
            manualDescription: "",
            movieTitle: "",
            multipleChoice: "3",
          },
          testSiteUnavailable: true,
          status: true,
        },
      });
      expect(result).to.deep.equal({});
    });
    it("TPD does not support that specific studio. Should return nothing because we assume we select 'do nothing' when asked again", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[Colette] Mia Malkova",
        scenePath: "Z:\\Keep\\test\\[Colette] Mia Malkova.mp4",
        testMode: {
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "",
            enterSceneTitle: "Colette Mia Malkova",
            enterStudioName: "Colette",
            manualActors: "",
            manualDescription: "",
            movieTitle: "",
            multipleChoice: "3",
          },
          testSiteUnavailable: true,
          status: true,
        },
      });
      expect(result).to.deep.equal({});
    });
    it("Should not parse the studio but success in searching it with fullname", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[bb18] Kira Perez - Cock Is Her Duty.mp4",
        scenePath: "Z:\\Keep\\test\\[bb18] Kira Perez - Cock Is Her Duty.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Kira Perez",
            enterSceneDate: "",
            enterSceneTitle: "Cock Is Her Duty",
            enterStudioName: "Bang Bros 18",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "FRAG OUT! Today we have the beautiful Kira Perez playing video games in her spare time. But then, out of the corner of the room, Lil D steps in to check his step sister out. He hides in a corner and throws paper balls to annoy her. Kira's had it with Lil D always bothering her so she challenges him to a match. Loser has to do something they don't want to do. Of course Kira beats his ass and so Lil D has to eat her ass. He isn't feeling it but Kira on the other hand, she wants more than just a tongue up her ass. She tells Lil D to put his pants down because she has an appetite for some dick. The rest is history as Kira shows us again why she is the hottest gamer girl out there. Shit, I might subscribe if she starts streaming! Watch Kira ride Lil D until she can't take it anymore and that's when she goes turbo mode and tries out different positions. Kira does her best to stay away from the gulag for you so watch until the end, dammit!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("BANGBROS 18");
    });
  });
  describe("When UnPopulated Databases exist...", () => {
    it("Should return nothing because no search is completed with no parsed Actor or Studio when manualTouch is false", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: false,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesUnPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosUnPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.deep.equal({});
    });
    it("Should allow manual input, no movie, no search -- Unpopulated databases", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: false,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesUnPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosUnPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Enter scene details manually, straight into the porn-valt",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "2013.10.10",
            enterSceneTitle: "So Young So Sexy P.O.V. #8 - Scene 2",
            enterStudioName: "New Sensations",
            manualActors: "Mia Malkova, Mike Adriano",
            manualDescription:
              "stud lovin. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!",
            movieTitle: "",
            multipleChoice: "",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "stud lovin. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("New Sensations");
    });
    it("Not the correct import information, saying 'no' should assume 'do nothing' on the second question", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: false,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesUnPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosUnPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "n",
          questionAnswers: {
            enterInfoSearch: "Enter scene details manually, straight into the porn-valt",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "2013.10.10",
            enterSceneTitle: "So Young So Sexy P.O.V. #8 - Scene 2",
            enterStudioName: "New Sensations",
            manualActors: "Mia Malkova, Mike Adriano",
            manualDescription:
              "stud lovin. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!",
            movieTitle: "",
            multipleChoice: "",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.deep.equal({});
    });
    it("Should allow manual input, with movie, no search -- Unpopulated databases", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesUnPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosUnPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        scenePath:
          "Z:\\Keep\\test\\[New Sensations] Mia Malkova 2013.10.10 - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Enter scene details manually, straight into the porn-valt",
            enterMovie: "y",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "2013.10.10",
            enterSceneTitle: "So Young So Sexy P.O.V. #8 - Scene 2",
            enterStudioName: "New Sensations",
            manualActors: "Mia Malkova, Mike Adriano",
            manualDescription:
              "stud lovin. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!",
            movieTitle: "So Young So Sexy P.O.V. #8",
            multipleChoice: "",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "stud lovin. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("New Sensations");
      expect(result.movie).to.equal("So Young So Sexy P.O.V. #8");
    });
  });
  describe("When Mixed Databases exist...", () => {
    it("Should have DB files with Studio and Scene already -- No Actor -- ManualTouch True -- Should find with correct answers", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova - So Young So Sexy P.O.V. #8.mp4",
        scenePath: "Z:\\Keep\\test\\[New Sensations] Mia Malkova - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "n",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "2013.10.10",
            enterSceneTitle: "So Young So Sexy P.O.V. #8 - Scene 2",
            enterStudioName: "New Sensations",
            manualActors: "",
            manualDescription: "",
            movieTitle: "So Young So Sexy P.O.V. #8",
            multipleChoice: "0",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova's back and more flexible more than ever. She is looking fine and is extremely horny for some sweet stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Should have DB files with Scene already -- No Studio or Actor -- ManualTouch True -- Should find with correct answers", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: true,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesUnPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova - So Young So Sexy P.O.V. #8.mp4",
        scenePath: "Z:\\Keep\\test\\[New Sensations] Mia Malkova - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          CorrectImportInfo: "y",
          questionAnswers: {
            enterInfoSearch: "Search scene details on The Porn Database (TPD)",
            enterMovie: "y",
            enterOneActorName: "Mia Malkova",
            enterSceneDate: "2013.10.10",
            enterSceneTitle: "So Young So Sexy P.O.V. #8 - Scene 2",
            enterStudioName: "New Sensations",
            manualActors: "Mia Malkova,Mike Adriano",
            manualDescription:
              "stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!",
            movieTitle: "So Young So Sexy P.O.V. #8",
            multipleChoice: "0",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.be.an("object");
      expect(result.description).to.equal(
        "Mia Malkova's back and more flexible more than ever. She is looking fine and is extremely horny for some sweet stud lovin'. Cum watch Mia Malkova work this hard cock to explosion of warm man chowder all across her face!"
      );
      expect(result.releaseDate).to.be.a("number");
      expect(result.thumbnail).to.be.a("string");
      expect(result.actors).to.be.a("Array");
      expect(result.studio).to.equal("NEW SENSATIONS");
    });
    it("Should have DB files with Scene already but return nothing, no questions -- No Studio or Actor parsed", async () => {
      const result = await plugin({
        ...context,
        args: {
          ManualTouch: false,
          SceneDuplicationCheck: true,
          parseActor: true,
          parseStudio: true,
          source_settings: {
            Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
            Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
            Studios: "./plugins/PromisedScene/test/fixtures/studiosUnPopulated.db",
          },
        },
        sceneName: "[New Sensations] Mia Malkova - So Young So Sexy P.O.V. #8.mp4",
        scenePath: "Z:\\Keep\\test\\[New Sensations] Mia Malkova - So Young So Sexy P.O.V. #8.mp4",
        testMode: {
          questionAnswers: {
            enterInfoSearch: "Do nothing (let the scene be imported with no details)",
          },
          testSiteUnavailable: false,
          status: true,
        },
      });
      expect(result).to.deep.equal({});
    });
  });
  describe("Handle all of the errors properly.", () => {
    it("Should fail with error:  Plugin used for unsupported event", async () => {
      let errord = false;
      try {
        await plugin({
          ...context,
          args: {
            ManualTouch: true,
            SceneDuplicationCheck: true,
            parseActor: true,
            parseStudio: true,
            source_settings: {
              Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
              Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
              Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
            },
          },
          sceneName: "[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          scenePath:
            "Z:\\Keep\\test\\[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          testMode: {
            testSiteUnavailable: false,
            status: false,
          },
        });
      } catch (error) {
        expect(error.message).to.equal(" ERR: Plugin used for unsupported event");
        errord = true;
      }
      expect(errord).to.be.true;
    });
    it("Should fail with error:  Missing source_settings in plugin args", async () => {
      let errord = false;
      try {
        await plugin({
          ...context,
          args: {
            ManualTouch: true,
            SceneDuplicationCheck: true,
            parseActor: true,
            parseStudio: true,
          },
          sceneName: "[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          scenePath:
            "Z:\\Keep\\test\\[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          testMode: {
            testSiteUnavailable: false,
            status: true,
          },
        });
      } catch (error) {
        expect(error.message).to.equal(" ERR: Missing source_settings in plugin args");
        errord = true;
      }
      expect(errord).to.be.true;
    });
    it("Should fail with error:  Missing ParseActor in plugin args", async () => {
      let errord = false;
      try {
        await plugin({
          ...context,
          args: {
            ManualTouch: true,
            SceneDuplicationCheck: true,
            parseStudio: true,
            source_settings: {
              Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
              Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
              Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
            },
          },
          sceneName: "[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          scenePath:
            "Z:\\Keep\\test\\[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          testMode: {
            testSiteUnavailable: false,
            status: true,
          },
        });
      } catch (error) {
        expect(error.message).to.equal(" ERR: Missing ParseActor in plugin args");
        errord = true;
      }
      expect(errord).to.be.true;
    });
    it("Should fail with error:  Missing parseStudio in plugin args", async () => {
      let errord = false;
      try {
        await plugin({
          ...context,
          args: {
            ManualTouch: true,
            SceneDuplicationCheck: true,
            parseActor: true,
            source_settings: {
              Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
              Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
              Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
            },
          },
          sceneName: "[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          scenePath:
            "Z:\\Keep\\test\\[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          testMode: {
            testSiteUnavailable: false,
            status: true,
          },
        });
      } catch (error) {
        expect(error.message).to.equal(" ERR: Missing parseStudio in plugin args");
        errord = true;
      }
      expect(errord).to.be.true;
    });
    it("Should fail with error:  Missing ManualTouch in plugin args", async () => {
      let errord = false;
      try {
        await plugin({
          ...context,
          args: {
            SceneDuplicationCheck: true,
            parseActor: true,
            parseStudio: true,
            source_settings: {
              Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
              Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
              Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
            },
          },
          sceneName: "[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          scenePath:
            "Z:\\Keep\\test\\[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          testMode: {
            testSiteUnavailable: false,
            status: true,
          },
        });
      } catch (error) {
        expect(error.message).to.equal(" ERR: Missing ManualTouch in plugin args");
        errord = true;
      }
      expect(errord).to.be.true;
    });
    it("Should fail with error:  Missing SceneDuplicationCheck in plugin args", async () => {
      let errord = false;
      try {
        await plugin({
          ...context,
          args: {
            ManualTouch: true,
            parseActor: true,
            parseStudio: true,
            source_settings: {
              Actors: "./plugins/PromisedScene/test/fixtures/actorsUnPopulated.db",
              Scenes: "./plugins/PromisedScene/test/fixtures/scenesPopulated.db",
              Studios: "./plugins/PromisedScene/test/fixtures/studiosPopulated.db",
            },
          },
          sceneName: "[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          scenePath:
            "Z:\\Keep\\test\\[Bangbrosclips] Mia Malkova 04.01.2016 - Flexible while getting pounded.mp4",
          testMode: {
            testSiteUnavailable: false,
            status: true,
          },
        });
      } catch (error) {
        expect(error.message).to.equal(" ERR: Missing SceneDuplicationCheck in plugin args");
        errord = true;
      }
      expect(errord).to.be.true;
    });
  });
});