"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakePosts1667698891864 = void 0;
class FakePosts1667698891864 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
        insert into post (title, text, "creatorId", "createdAt") values ('Free the Nipple', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2022-04-22T11:54:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Demons (Dèmoni)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2022-03-20T02:46:20Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Atlantic City', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2022-04-27T04:38:51Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Eichmann', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-06-11T18:32:56Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Fullmetal Alchemist the Movie: Conqueror of Shamballa (Gekijô-ban hagane no renkinjutsushi: Shanbara wo yuku mono)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2022-02-28T18:21:56Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Missing Person, The', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2022-05-10T02:20:18Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Raven, The', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2022-05-20T10:03:32Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Cruel Romance, A (Zhestokij Romans)', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

        Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2022-11-10T03:52:09Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Maîtresse (Mistress)', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2022-09-19T05:21:14Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Behind Enemy Lines', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2022-06-12T10:34:38Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Adventures in Zambezia', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

        Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

        In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2022-08-18T02:46:08Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Lone Wolf and Cub: Baby Cart in Peril (Kozure Ôkami: Oya no kokoro ko no kokoro)', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2022-06-07T05:19:44Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Mo'' Better Blues', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-08-29T19:11:44Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Valdez Is Coming', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2022-02-20T04:56:20Z');
        insert into post (title, text, "creatorId", "createdAt") values ('A Pistol For Ringo', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2022-04-27T05:38:48Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Groundhog Day', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-12-05T12:34:59Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Young Bess', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-09-03T16:29:23Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Disaster L.A.', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2022-03-01T01:05:45Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Vassilisa the Beautiful (Vasilisa prekrasnaya)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2022-09-23T02:02:47Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Accident on Hill Road', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-02-18T12:24:18Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Zeitgeist: Moving Forward', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2022-10-11T14:24:29Z');
        insert into post (title, text, "creatorId", "createdAt") values ('All Dogs Christmas Carol, An', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

        Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2021-12-10T23:28:37Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Pusher III: I''m the Angel of Death', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2022-03-07T17:05:37Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Up in the Air', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2022-01-11T07:28:40Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Last Mimzy, The', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-11-04T18:23:09Z');
        insert into post (title, text, "creatorId", "createdAt") values ('I as in Icarus (I... comme Icare)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-06-24T03:51:20Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Party Monster', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

        In congue. Etiam justo. Etiam pretium iaculis justo.

        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2022-08-29T03:54:57Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Kind of Loving, A', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

        Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-12-04T18:22:37Z');
        insert into post (title, text, "creatorId", "createdAt") values ('True Love', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2022-07-25T21:06:42Z');
        insert into post (title, text, "creatorId", "createdAt") values ('The Bone Snatcher', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2022-02-09T11:58:17Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Bill Burr: Let It Go', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2022-05-27T22:25:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Lionheart', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-12-26T15:28:39Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Never Again', 'In congue. Etiam justo. Etiam pretium iaculis justo.

        In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2022-05-14T09:46:11Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Ashes, The (Popioly)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2022-08-09T17:50:44Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Doctor Dolittle', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, '2022-09-22T03:14:11Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Deep End of the Ocean, The', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2022-04-29T08:58:07Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Owning Mahowny', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2022-02-20T19:43:53Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Night Visitor, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2022-02-26T17:21:34Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Shanghai Express', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

        Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2022-06-27T01:42:10Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Miss Sweden (Fröken Sverige)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2022-05-20T22:03:23Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Sisterhood of the Traveling Pants 2, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

        Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1, '2022-01-25T09:01:32Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Muppet Musicians of Bremen, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2022-05-04T13:19:36Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Godfather: Part II, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2022-06-30T16:53:19Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Prize Winner of Defiance Ohio, The', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2022-08-18T01:49:33Z');
        insert into post (title, text, "creatorId", "createdAt") values ('English Teacher, The', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

        Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2022-09-11T08:16:50Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Beginning of an Unknown Era (Nachalo nevedomogo veka)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2022-07-16T08:41:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Wolfman, The', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2022-05-08T07:36:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('DuckTales: The Movie - Treasure of the Lost Lamp', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2021-12-07T22:43:59Z');
        insert into post (title, text, "creatorId", "createdAt") values ('It Rains in My Village (Bice skoro propast sveta)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2022-02-13T11:13:41Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Kairat', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2022-06-25T08:12:12Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Empty Nest (El nido vacío)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2022-07-03T23:40:21Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Love Stinks', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2022-06-21T04:17:39Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Árido Movie', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-09-27T10:12:30Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Retreat', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2022-05-31T14:38:23Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Coelacanth: The Fish That Time Forgot', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2022-08-26T15:00:49Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Alex and Emma', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2022-05-30T00:21:17Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Last Godfather, The', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2022-05-11T03:49:33Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Warlock: The Armageddon', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2022-10-20T19:47:50Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Tabu: A Story of the South Seas', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2022-07-20T21:16:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Mommy', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2022-05-07T14:07:22Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Jungle Fighters', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2022-04-25T01:44:31Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Artifact', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2022-02-03T00:40:21Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Topkapi', 'Fusce consequat. Nulla nisl. Nunc nisl.

        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2022-10-12T10:37:42Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Donkey Hide (Oslinaya shkura)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2022-07-03T22:20:08Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Blow', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2022-06-11T19:15:44Z');
        insert into post (title, text, "creatorId", "createdAt") values ('What Planet Are You From?', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2021-12-07T23:33:41Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Desperadoes, The', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

        Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2022-01-10T10:52:44Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Living with Wolves', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2022-08-24T12:05:08Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Grown Up Movie Star', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

        Fusce consequat. Nulla nisl. Nunc nisl.

        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, '2021-12-03T05:12:30Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Heavy Weather', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2022-08-23T19:38:32Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Sniper 2', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2022-09-27T01:04:53Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Hush... Hush, Sweet Charlotte', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

        Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2022-06-29T06:14:25Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Carcasses', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-08-30T03:21:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Guadalcanal Diary', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2022-06-15T19:37:28Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Great White Hope, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2022-07-07T22:03:06Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Three Lives of Thomasina, The', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

        Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2022-02-21T07:30:59Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Animated Motion: Part 5', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

        Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2022-03-28T21:41:52Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Direct Action', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2022-08-24T07:27:54Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Don''t Move (Non ti muovere)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

        Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-10-23T11:02:03Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Man of the House', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2022-09-13T19:11:55Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Story of the Weeping Camel, The (Geschichte vom weinenden Kamel, Die)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-01-27T15:58:15Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Night Strangler, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2022-03-31T00:51:45Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Ciao Bella', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-01-01T18:49:34Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Stars', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2022-08-20T06:48:00Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Shooting Fish', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2022-08-18T01:16:43Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Adjust Your Tracking', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, '2022-05-03T00:41:04Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Chill Factor', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2022-07-24T16:46:12Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Erased (Expatriate, The)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

        Sed ante. Vivamus tortor. Duis mattis egestas metus.

        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2022-03-01T03:21:51Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Bellboy, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

        In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1, '2022-05-29T21:50:29Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Pay or Die', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-05-28T21:59:30Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Red Bear, A (Un oso rojo)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2022-10-12T18:10:25Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Cry Baby Lane', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-07-08T04:48:08Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Hamlet', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-09-03T10:06:18Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Stay Tuned', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2022-02-06T09:04:51Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Bluebeard (Barbe-Bleue)', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2022-07-01T03:49:22Z');
        insert into post (title, text, "creatorId", "createdAt") values ('O.C. and Stiggs', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-03-16T19:07:22Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Rovaniemen markkinoilla', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-06-14T08:51:55Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Trekkies 2', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2022-10-26T20:29:24Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Graveyard Shift (Stephen King''s Graveyard Shift)', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

        In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-07-04T02:43:12Z');
        insert into post (title, text, "creatorId", "createdAt") values ('Shrine, The', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

        Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 1, '2022-10-11T00:46:22Z');
        `);
        });
    }
    down(_) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.FakePosts1667698891864 = FakePosts1667698891864;
//# sourceMappingURL=1667698891864-lireddit-server.js.map