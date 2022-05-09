import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "ade80c7970062a",
        pass: "7a74c8eb4e63ef"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@fidget.com>',
            to: 'Jonathan <teste@teste.com>',
            subject: subject,
            html: body,
        })
    };

}