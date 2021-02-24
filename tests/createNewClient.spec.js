import { expect } from 'chai';
import 'chai-http';
import { createClient } from '../sourceBooksApis/clientApi';
import * as chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
let clientName;

describe('Client create test suite', async () => {
    it('should test that possible to create new clien', async () => {
        const timeStamp = new Date().toLocaleString();
        clientName = `Name of organization ${timeStamp}`;
        const responseFromClienCreate = await createClient(clientName);

        expect(responseFromClienCreate).to.have.status(200);
        expect(responseFromClienCreate.data).to.haveOwnProperty('clientId').to.be.not.null;
    });
});