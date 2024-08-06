import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private prisma: PrismaService) {}

  create(createPlayerDto: CreatePlayerDto) {
    return this.prisma.player.create({
      data: createPlayerDto,
    });
  }

  findAllAlive() {
    return this.prisma.player.findMany();
  }

  findOne(id: number) {
    return this.prisma.player.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.prisma.player.update({
      where: { id },
      data: updatePlayerDto,
    });
  }

  remove(id: number) {
    return this.prisma.player.delete({
      where: { id },
    });
  }
}
